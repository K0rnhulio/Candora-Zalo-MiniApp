// Service to send ZNS notifications via Supabase Edge Function

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// ZNS Template ID - get from Zalo OA
const ZNS_TEMPLATE_ID = import.meta.env.VITE_ZNS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const ZNS_OA_ID = import.meta.env.VITE_ZNS_OA_ID || "YOUR_OA_ID";

interface ZNSTemplateData {
  customer_name: string;
  blend_name: string;
  blend_reasoning: string;
}

interface SendZNSResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendZNS(
  phone: string,
  templateId: string,
  templateData: ZNSTemplateData,
  oaId: string
): Promise<SendZNSResponse> {
  try {
    // Add timeout to prevent hanging forever
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const baseUrl = SUPABASE_URL?.endsWith('/') ? SUPABASE_URL : `${SUPABASE_URL}/`;
    const response = await fetch(`${baseUrl}functions/v1/send-zns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        oa_id: oaId,
        phone,
        template_id: templateId,
        template_data: templateData,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    console.log("🚀 ~ sendZNS ~ data:", data);

    if (data.error !== 0 && data.error !== undefined) {
      console.error("Send ZNS error:", data);
      return {
        success: false,
        error: data.message || "Failed to send ZNS",
      };
    }

    return {
      success: true,
      message: "ZNS sent successfully",
    };
  } catch (error) {
    console.error("Network error sending ZNS:", error);
    return {
      success: false,
      error: "Network error",
    };
  }
}

// Helper function to send scent reveal ZNS
export async function sendScentRevealZNS(
  phone: string,
  customerName: string,
  blendName: string,
  blendReasoning: string
): Promise<SendZNSResponse> {
  return sendZNS(
    phone,
    ZNS_TEMPLATE_ID,
    {
      customer_name: customerName,
      blend_name: blendName,
      blend_reasoning: blendReasoning,
    },
    ZNS_OA_ID
  );
}
