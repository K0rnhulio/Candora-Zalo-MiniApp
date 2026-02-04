import { useState, useCallback } from "react";
import { authorize, getUserInfo, getPhoneNumber, getSetting, getAccessToken } from "zmp-sdk";
import { useLanguage, useQuiz } from "@/hooks";
import { useSetAtom } from "jotai";
import { showPhoneModalAtom, phoneModalCallbackAtom } from "@/state";
import { decodePhoneToken } from "@/services/phoneService";
import { sendScentRevealZNS } from "@/services/znsService";

export default function ContactPage() {
  const { t } = useLanguage();
  const { handleContactSubmit, result } = useQuiz();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setShowPhoneModal = useSetAtom(showPhoneModalAtom);
  const setPhoneModalCallback = useSetAtom(phoneModalCallbackAtom);

  const handleRevealScent = useCallback(async () => {
    setIsSubmitting(true);

    try {
      // Step 1: Check current permission settings
      console.log("Checking permissions...");
      const settings = await getSetting({});
      console.log("Current settings:", JSON.stringify(settings, null, 2));

      const hasUserInfoPermission = settings.authSetting?.["scope.userInfo"];
      const hasPhonePermission =
        settings.authSetting?.["scope.userPhonenumber"];
      console.log(
        "Has userInfo:",
        hasUserInfoPermission,
        "Has phone:",
        hasPhonePermission
      );

      // Step 2: Request authorization only if not already granted
      if (!hasUserInfoPermission || !hasPhonePermission) {
        console.log("Requesting authorization...");
        try {
          const authResult = await authorize({
            scopes: ["scope.userInfo", "scope.userPhonenumber"],
          });
          console.log(
            "Authorization result:",
            JSON.stringify(authResult, null, 2)
          );
        } catch (authError: unknown) {
          const error = authError as { code?: number; message?: string };
          console.error("Authorization error:", error);

          // If limit reached (-203), permissions might already be granted, continue
          if (error.code === -203) {
            console.log("Auth limit reached, trying to get data anyway...");
          } else {
            // User denied permission - show global modal
            setIsSubmitting(false);
            setPhoneModalCallback(() => handleRevealScent);
            setShowPhoneModal(true);
            return;
          }
        }
      } else {
        console.log("Permissions already granted, skipping authorize()");
      }

      // Step 3: Get user info (name, avatar, etc.)
      let userName = "Zalo User";
      try {
        const userInfoResult = await getUserInfo({});
        console.log(
          "getUserInfo result:",
          JSON.stringify(userInfoResult, null, 2)
        );
        userName = userInfoResult.userInfo?.name || "Zalo User";
        console.log("Got userName:", userName);
      } catch (userInfoError) {
        console.error("getUserInfo error:", userInfoError);
        // Continue with default name
      }

      // Step 4: Get phone number token
      let userPhone = "";
      try {
        const phoneResult = await getPhoneNumber({});
        console.log(
          "getPhoneNumber result:",
          JSON.stringify(phoneResult, null, 2)
        );

        const phoneToken = phoneResult.token;

        if (!phoneToken) {
          console.log("No phone token found in result");
          setIsSubmitting(false);
          setPhoneModalCallback(() => handleRevealScent);
          setShowPhoneModal(true);
          return;
        }

        console.log("Got phone token:", phoneToken);

        // Step 4b: Get access token for decoding
        try {
          const accessTokenResult = await getAccessToken({});
          console.log("Access token result:", accessTokenResult);
          // getAccessToken returns string directly or { accessToken: string }
          const accessToken = typeof accessTokenResult === 'string'
            ? accessTokenResult
            : (accessTokenResult as { accessToken?: string }).accessToken;

          if (accessToken) {
            // Step 4c: Decode phone token via Supabase Edge Function
            console.log("Decoding phone token...");
            const decodeResult = await decodePhoneToken(phoneToken, accessToken);
            console.log("Decode result:", decodeResult);

            if (decodeResult.success && decodeResult.phoneNumber) {
              // Add + prefix for international format if not present
              userPhone = decodeResult.phoneNumber.startsWith("+")
                ? decodeResult.phoneNumber
                : `+${decodeResult.phoneNumber}`;
              console.log("Decoded phone number:", userPhone);
            } else {
              // Fallback: store token if decoding fails
              console.log("Decode failed, storing token as fallback");
              userPhone = phoneToken;
            }
          } else {
            // No access token, store phone token as fallback
            console.log("No access token, storing phone token");
            userPhone = phoneToken;
          }
        } catch (accessTokenError) {
          console.error("Error getting access token:", accessTokenError);
          // Fallback: store phone token
          userPhone = phoneToken;
        }
      } catch (phoneError) {
        console.error("Phone permission denied:", phoneError);
        setIsSubmitting(false);
        setPhoneModalCallback(() => handleRevealScent);
        setShowPhoneModal(true);
        return;
      }

      // Step 5: Send ZNS notification (fire and forget - don't block the flow)
      if (result && userPhone) {
        console.log("Sending ZNS notification (non-blocking)...");
        sendScentRevealZNS(
          userPhone,
          userName,
          result.blendName,
          result.reasoning
        ).then(znsResult => {
          console.log("ZNS result:", znsResult);
          if (!znsResult.success) {
            console.warn("ZNS sending failed:", znsResult.error);
          }
        }).catch(znsError => {
          console.error("ZNS error:", znsError);
        });
      }

      // Step 6: Submit the contact info and proceed to result page
      await handleContactSubmit({ name: userName, phone: userPhone });
      setIsSubmitting(false);
    } catch (err) {
      console.error("Unexpected error:", err);
      setIsSubmitting(false);
    }
  }, [handleContactSubmit, setPhoneModalCallback, setShowPhoneModal, result]);

  return (
    <div className="w-full px-4 py-6 animate-fade-in-up h-full">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-20">
          <div className="w-14 h-14 bg-gold-100 text-black rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-serif text-black mb-3">
            {t.contactForm.title}
          </h2>
          <p className="text-gray-600 font-light text-sm">
            {t.contactForm.description}
          </p>
        </div>

        <button
          onClick={handleRevealScent}
          disabled={isSubmitting}
          className="w-full bg-black text-white py-4 px-6 hover:bg-gray-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group rounded-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              {t.contactForm.submitting}
            </span>
          ) : (
            <span className="uppercase tracking-[0.15em] font-bold text-sm flex items-center justify-center gap-2">
              {t.contactForm.submitButton}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
