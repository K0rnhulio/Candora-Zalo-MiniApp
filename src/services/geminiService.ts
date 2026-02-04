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

  const model = "gemini-3-flash-preview";

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
  You are an expert Perfume Formulator and Scent Psychologist. You do not just mix liquids; you translate a user's personality, memories, and aspirations into a signature scent identity.

  YOUR GOAL:
  The user has just invested effort into a quiz about their identity (The IKEA Effect). You must reward them with a result that feels hyper-personalized. Use "Cold Reading" techniques—make specific, insightful statements about who they are based on their abstract answers.

  INVENTORY:
  ${scentInventory}

  USER PROFILE (QUIZ ANSWERS):
  ${userProfile}

  ---
  STRICT BLENDING RULES (The Science):
  1. Total Blend = 100%.
  2. Foundation (Main Scents): Select 1 or 2 items. MUST sum to ≥ 80%. These define the core character.
  3. Accent (Supportive Notes): Select exactly 1 item. MUST sum to ≤ 20%. This adds the unique twist or "top note" spark.
  4. Compatibility: You are the expert. Ensure the Main and Support notes do not chemically clash (e.g., avoid mixing heavy Oud with light Marine unless creating a specific "Paradox" vibe).
  5. Constraints: Use ONLY the provided Inventory codes. Do not hallucinate ingredients.

  ---
  PSYCHOLOGICAL OUTPUT INSTRUCTIONS (The Art):

  1. BLEND NAME:
     Create a name that sounds like a high-end niche brand (e.g., "Midnight Alchemist," "Velvet Echo"). Avoid generic names like "My Floral Scent." The name should imply ownership and status.

  2. SCENT PROFILE DESCRIPTION (The Hook):
     Write a 30-50 word sensory narrative. Do not just list notes. Describe the *feeling*.
     - Use "You" phrasing to trigger the Endowment Effect (e.g., "Your signature scent opens with...").
     - Mention the luxury inspiration from 'similarTo' if available, but frame it as a peer, not a copy (e.g., "Rivalling the depth of [SimilarTo], but tailored for your specific chemistry...").
     - Format: Return as a clean HTML string (use <b> for emphasis, <br> for breaks).

  3. REASONING (The Validation):
     This is the most important part. You must explain *why* this mix fits their *specific* quiz answers.
     - Connect "Abstract" to "Concrete": "Because you chose [Answer: 'Dark Velvet'], we used a heavy amber base to give that tactile warmth."
     - Connect "Job to be Done" to "Ingredient": "To achieve the [Answer: 'Confidence'] you asked for, we added a sharp citrus top note to subconsciously trigger alertness."
     - Tone: Validating, insightful, and authoritative.
     - Format: Return as a clean HTML string.

  4. COMPONENT REASONING:
     For each individual ingredient, give a 5-word "Why". E.g., "Adds the requested 'Crisp Linen' texture."

  ---
  LANGUAGE SETTINGS:
  ${language === 'vi' ? 'OUTPUT LANGUAGE: VIETNAMESE. Tone: Luxurious, poetic, and sophisticated.' : language === 'ru' ? 'OUTPUT LANGUAGE: RUSSIAN. Tone: Deep, emotional, and elegant.' : 'OUTPUT LANGUAGE: ENGLISH. Tone: Modern, premium, and direct.'}
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
