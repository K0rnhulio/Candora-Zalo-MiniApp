// Service to decode Zalo phone number token via Vietnam server

const PHONE_DECODER_URL = "https://zalo-phone.tekmium.com";

interface DecodePhoneResponse {
  success: boolean;
  phoneNumber: string | null;
  error?: string;
}

export async function decodePhoneToken(
  token: string,
  accessToken: string
): Promise<DecodePhoneResponse> {
  try {
    const response = await fetch(`${PHONE_DECODER_URL}/decode-phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, accessToken }),
    });

    const data = await response.json();
    console.log("🚀 ~ decodePhoneToken ~ data:", data);

    if (!response.ok) {
      console.error("Decode phone error:", data);
      return {
        success: false,
        phoneNumber: null,
        error: data.error || "Failed to decode phone number",
      };
    }

    return {
      success: true,
      phoneNumber: data.phoneNumber,
    };
  } catch (error) {
    console.error("Network error decoding phone:", error);
    return {
      success: false,
      phoneNumber: null,
      error: "Network error",
    };
  }
}
