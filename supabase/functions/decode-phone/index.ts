// Supabase Edge Function to decode Zalo phone number token
// Deploy with: supabase functions deploy decode-phone

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DecodeRequest {
  token: string;
  accessToken: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { token, accessToken }: DecodeRequest = await req.json();

    if (!token) {
      return new Response(
        JSON.stringify({ error: "Token is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get secret key from environment
    const secretKey = Deno.env.get("ZALO_SECRET_KEY");
    if (!secretKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error: missing secret key" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Call Zalo API to decode phone token
    // API: https://graph.zalo.me/v2.0/me/info
    const zaloApiUrl = `https://graph.zalo.me/v2.0/me/info`;

    const response = await fetch(zaloApiUrl, {
      method: "GET",
      headers: {
        "access_token": accessToken,
        "code": token,
        "secret_key": secretKey,
      },
    });

    const data = await response.json();
    console.log("Zalo API response:", data);

    if (data.error) {
      return new Response(
        JSON.stringify({ error: data.message || "Failed to decode phone number" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extract phone number from response
    const phoneNumber = data.data?.number || data.number || null;

    return new Response(
      JSON.stringify({
        success: true,
        phoneNumber,
        raw: data // Include raw response for debugging
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error decoding phone:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
