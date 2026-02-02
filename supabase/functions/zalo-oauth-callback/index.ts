// Supabase Edge Function - Zalo OAuth Callback
// Handles OAuth callback from Zalo and exchanges code for access token

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ZALO_APP_ID = Deno.env.get("ZALO_APP_ID")!;
const ZALO_APP_SECRET = Deno.env.get("ZALO_APP_SECRET")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

serve(async (req: Request) => {
  const url = new URL(req.url);

  // Handle GET request (callback from Zalo)
  if (req.method === "GET") {
    const code = url.searchParams.get("code");
    const codeVerifier = url.searchParams.get("code_verifier");
    const oaId = url.searchParams.get("oa_id");
    const state = url.searchParams.get("state");

    if (!code) {
      return new Response(
        renderHTML("Lỗi", "Không nhận được mã xác thực từ Zalo"),
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // Get code_verifier from state/session (stored when initiating OAuth)
    // For simplicity, we'll get it from query param or database
    let storedCodeVerifier = codeVerifier;

    if (!storedCodeVerifier && state) {
      // Try to get from database
      const { data } = await supabase
        .from("zalo_oauth_states")
        .select("code_verifier")
        .eq("state", state)
        .single();

      if (data) {
        storedCodeVerifier = data.code_verifier;
      }
    }

    if (!storedCodeVerifier) {
      return new Response(
        renderHTML("Lỗi", "Không tìm thấy code_verifier. Vui lòng thử lại từ đầu."),
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch(
        "https://oauth.zaloapp.com/v4/oa/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "secret_key": ZALO_APP_SECRET,
          },
          body: new URLSearchParams({
            app_id: ZALO_APP_ID,
            code: code,
            grant_type: "authorization_code",
            code_verifier: storedCodeVerifier,
          }),
        }
      );

      const tokenData = await tokenResponse.json();
      console.log("Token response:", tokenData);

      if (tokenData.error) {
        return new Response(
          renderHTML("Lỗi", `Không thể lấy access token: ${tokenData.error_description || tokenData.error}`),
          { headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      const { access_token, refresh_token, expires_in } = tokenData;

      // Get OA info to get oa_id
      const oaInfoResponse = await fetch(
        "https://openapi.zalo.me/v2.0/oa/getoa",
        {
          method: "GET",
          headers: {
            "access_token": access_token,
          },
        }
      );
      const oaInfo = await oaInfoResponse.json();
      console.log("OA Info:", oaInfo);

      const actualOaId = oaInfo.data?.oa_id || oaId || "unknown";

      // Save tokens to database
      const expiresAt = new Date(Date.now() + expires_in * 1000).toISOString();

      const { error: upsertError } = await supabase
        .from("zalo_tokens")
        .upsert({
          oa_id: actualOaId,
          access_token: access_token,
          refresh_token: refresh_token,
          expires_at: expiresAt,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "oa_id",
        });

      if (upsertError) {
        console.error("Error saving tokens:", upsertError);
        return new Response(
          renderHTML("Lỗi", `Không thể lưu token: ${upsertError.message}`),
          { headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      // Clean up state if exists
      if (state) {
        await supabase
          .from("zalo_oauth_states")
          .delete()
          .eq("state", state);
      }

      return new Response(
        renderHTML(
          "Thành công! ✅",
          `Đã ủy quyền thành công cho OA: ${actualOaId}<br><br>Access Token đã được lưu vào database.<br><br>Bạn có thể đóng trang này.`
        ),
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );

    } catch (error) {
      console.error("OAuth error:", error);
      return new Response(
        renderHTML("Lỗi", `Đã xảy ra lỗi: ${error.message}`),
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }
  }

  return new Response("Method not allowed", { status: 405 });
});

function renderHTML(title: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Zalo OAuth</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      text-align: center;
      max-width: 400px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
    p {
      color: #666;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${title}</h1>
    <p>${message}</p>
  </div>
</body>
</html>
  `;
}
