import { useLanguage, useQuiz } from "@/hooks";

export default function WelcomePage() {
  const { t } = useLanguage();
  const { handleStartQuiz } = useQuiz();

  return (
    <div className="w-full px-4 py-6 animate-fade-in-up">
      <div className="flex flex-col items-center text-center">
        {/* Hero Image */}
        <div className="relative mb-6 w-full max-w-xs">
          <div className="absolute -inset-4 bg-gradient-to-br from-gold-100 to-gold-50 rounded-full blur-3xl opacity-60"></div>
          <img
            src="https://candora.b-cdn.net/Candrora-Perfume.jpg"
            alt="Candora Luxury Perfume"
            className="relative w-full rounded-2xl shadow-2xl object-cover"
          />
          {/* Floating accent */}
          <div className="absolute -bottom-3 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs uppercase tracking-widest font-medium">{t.landing.badge}</span>
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-2 font-medium">{t.landing.eyebrow}</p>
          <h1 className="text-2xl font-serif text-black mb-3 leading-tight">
            {t.landing.headline} <br/> <span className="text-gold-500 italic">{t.landing.headlineAccent}</span>
          </h1>
          <p className="text-sm text-gray-500 mb-2 font-light leading-relaxed">
            {t.landing.bodyParagraph1}
          </p>
          <p className="text-sm text-gray-500 mb-6 font-light leading-relaxed">
            {t.landing.bodyParagraph2}
          </p>

          <button
            onClick={handleStartQuiz}
            className="w-full bg-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl animate-pulse-glow"
          >
            <span className="uppercase tracking-[0.15em] font-bold text-sm">{t.landing.ctaButton}</span>
          </button>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl text-gold-500 font-semibold">{t.landing.stats.premium}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">{t.landing.stats.premiumLabel}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl text-gold-500 font-semibold">{t.landing.stats.shipping}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">{t.landing.stats.shippingLabel}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl text-gold-500 font-semibold">{t.landing.stats.unique}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">{t.landing.stats.uniqueLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
