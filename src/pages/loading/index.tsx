import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks";

export default function LoadingPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [percentage] = useState(() => (95 + Math.random() * 4).toFixed(1));

  useEffect(() => {
    if (step >= 3) return;
    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 1500);
    return () => clearTimeout(timer);
  }, [step]);

  const message = t.loading.steps[step].replace("{percentage}", percentage);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-8">
      {/* Image with overlay spinner */}
      <div className="relative w-48 h-48 mb-8">
        <img
          src="https://candora.b-cdn.net/Candrora-Perfume.jpg"
          alt="Perfume"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        {/* Overlay with spinner */}
        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 border-3 border-white/40 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mb-4">
        {[0, 1, 2, 3].map((dotIndex) => (
          <div
            key={dotIndex}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              dotIndex <= step
                ? "bg-gold-500 scale-110"
                : "bg-gray-300 scale-100"
            }`}
          />
        ))}
      </div>

      {/* Message with fade animation */}
      <p
        key={step}
        className="text-base text-gray-600 font-light text-center animate-fade-in px-4"
      >
        {message}
      </p>
    </div>
  );
}
