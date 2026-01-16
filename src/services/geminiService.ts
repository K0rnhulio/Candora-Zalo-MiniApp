import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ALL_SCENTS, QUESTIONS } from "../data/scents";
import { UserAnswers, BlendResult, ScentsType, Language } from "../types";

// Get API key from environment variable (Vite format)
const apiKey = import.meta.env.VITE_API_KEY;

// Initialize the client with the environment variable
const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateBlend = async (
  answers: UserAnswers,
  language: Language = "en"
): Promise<BlendResult> => {
  if (!apiKey) {
    console.warn(
      "API Key not found in environment variables. Using fallback mode."
    );
  }

  const model = "gemini-2.0-flash";

  const scentInventory = JSON.stringify(
    ALL_SCENTS.map((s) => ({
      number: s.number,
      code: s.code,
      name: s.name,
      type: s.type,
      notes: s.notes,
      mood: s.mood,
      category: s.category,
      gender: s.gender,
      similarTo: s.similarTo,
    }))
  );

  // Enhanced user profile mapping that includes the Question text, not just the ID
  const userProfile = Object.entries(answers)
    .map(([qId, answer]) => {
      const question = QUESTIONS.find((q) => q.id === Number(qId));
      return `Q: ${question ? question.text : `Question ${qId}`}\nA: ${answer}`;
    })
    .join("\n\n");

  const prompt = `
You are a Master Perfumer, a virtuoso of olfactory artistry with over 50 years of expertise in crafting bespoke fragrances for discerning clients worldwide. Your creations draw from the finest traditions of perfumery, blending science, intuition, and creativity to evoke emotions, memories, and atmospheres. You operate from a curated inventory of premium essences, divided into two distinct categories:

Main Scents (High-Concentration Essences): These form the powerful foundation of any blend—intense, long-lasting base notes with depth and character. Many are inspired by iconic luxury fragrances, as indicated by their 'similarTo' field, allowing you to infuse high-end sophistication into your creations.
Supportive Notes (Accentuating Aromas): These are subtler, ethereal elements designed to layer nuance, balance intensity, and add a personalized touch—lighter and more versatile for refinement.

Your primary mission is to design a tailored fragrance blend based on the user's quiz responses. Analyze their answers holistically: consider gender preferences (e.g., masculine, feminine, unisex), desired mood (e.g., uplifting, calming, seductive), vibe (e.g., fresh and energetic, warm and cozy, exotic and mysterious), and any specific notes or themes mentioned (e.g., floral, woody, citrus). Prioritize harmony and balance to create a cohesive scent that resonates deeply with the user.

STRICT RULES FOR BLEND CREATION:

1. The total blend percentages must sum exactly to 100%—no exceptions.
2. Select EXACTLY 2 items from the Main Scents list (type: "Main Scents") as the core foundation. These must comprise at least 80% of the total blend combined (e.g., 50% + 30%, or 60% + 20%, or 40% + 40%).
3. Select EXACTLY 1 item from the Supportive Notes list (type: "Supportive Notes") to enhance and modulate the base. This must comprise no more than 20% of the total blend.
4. The total number of components MUST be exactly 3 items (2 Main Scents + 1 Supportive Note).
5. Do not invent or hallucinate any scents, codes, names, or details. Use ONLY the exact codes, names, and attributes from the provided INVENTORY list. If a user's preferences don't perfectly align, adapt creatively within the available options—never fabricate.
6. Percentages should be whole numbers for simplicity and precision.
7. If the quiz responses are ambiguous or incomplete, default to a balanced, unisex approach while explaining your assumptions.
8. Ensure the blend is safe and appealing: avoid overwhelming combinations that could clash based on common perfumery knowledge (e.g., don't pair clashing families like heavy orientals with sharp citruses unless intentionally for contrast).

OUTPUT FORMAT:
Always structure your response clearly and elegantly, as follows:

Blend Name: A poetic, modern, evocative name for the fragrance that captures its essence.
Blend Composition: List the selected components with their exact codes, names, and percentages (e.g., "Main Scent: Code123 - Luxe Vanilla (similarTo: Chanel No. 5) - 60%").
Scent Profile Description: A sophisticated, vivid narrative (30-50 words) describing the fragrance's top, heart, and base notes, how it evolves on the skin, and the overall experience. Weave in sensory details (e.g., "opens with a burst of zesty citrus, unfolding into a velvety floral heart"). Explicitly highlight the luxury inspirations from the 'similarTo' fields to convey prestige (e.g., "echoing the opulent allure of [Similar To], this blend exudes timeless sophistication").
The output should be in HTML friendly format with <br> and nice formation.
Reasoning: A concise explanation (50-100 words) of your choices, directly tying them to the user's quiz answers. Reference specific responses (e.g., "Your preference for a calming mood led me to select [Scent] for its soothing undertones"). Discuss synergies between components and why this blend achieves the desired gender, mood, and vibe.
The output should be in HTML friendly format with <br> and nice formation.

Draw on your vast knowledge of scent families (e.g., floral, oriental, woody, fresh) to ensure the blend is harmonious and innovative. Your goal is to transport the user to a world of refined elegance—make every creation feel like a masterpiece.

LANGUAGE INSTRUCTION:
${
  language === "vi"
    ? "IMPORTANT: You MUST respond entirely in Vietnamese. The blend name, description, reasoning, and all component reasons must be written in Vietnamese. Use elegant, poetic Vietnamese language appropriate for luxury perfumery."
    : "Respond in English."
}

INVENTORY:
${scentInventory}

USER ANSWERS:
${userProfile}
`;

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      blendName: { type: Type.STRING },
      description: { type: Type.STRING },
      components: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            number: { type: Type.STRING },
            code: { type: Type.STRING },
            name: { type: Type.STRING },
            percentage: { type: Type.INTEGER },
            type: {
              type: Type.STRING,
              enum: [ScentsType.PERFUME, ScentsType.CANDLE],
            },
            reason: { type: Type.STRING },
          },
          required: ["number", "code", "name", "percentage", "type", "reason"],
        },
      },
      reasoning: { type: Type.STRING },
    },
    required: ["blendName", "description", "components", "reasoning"],
  };

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const result = JSON.parse(text) as BlendResult;

    // Post-processing: Attach the actual 'similarTo' data from the source of truth
    result.components = result.components.map((comp) => {
      const originalScent = ALL_SCENTS.find((s) => s.number === comp.number);
      return {
        ...comp,
        similarTo: originalScent?.similarTo,
      };
    });

    return result;
  } catch (error) {
    console.error("Error generating blend:", error);
    // Fallback Mock data in case of API failure
    return {
      blendName: "Mystic Fallback",
      description:
        "A serene blend created as a fallback due to connection issues or missing API key.",
      components: [
        {
          number: "1",
          code: "MRF-1700015",
          name: "Terra Gold",
          percentage: 80,
          type: ScentsType.PERFUME,
          reason: "Base note for stability (80%).",
          similarTo: "Hermes Terre d'Hermes",
        },
        {
          number: "245",
          code: "MRF-1740131",
          name: "Sea Salt & Sage",
          percentage: 20,
          type: ScentsType.CANDLE,
          reason: "Fresh top note (20%).",
        },
      ],
      reasoning:
        "We encountered a temporary issue with our perfumer AI (possibly missing configuration), but here is a balanced suggestion adhering to strict composition rules.",
    };
  }
};
