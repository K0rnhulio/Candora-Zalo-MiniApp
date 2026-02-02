import { useEffect, useRef } from "react";
import { useLanguage, useQuiz } from "@/hooks";
import QuizSection from "@/components/quiz-section";

export default function WelcomePage() {
  const { t } = useLanguage();
  const { currentQuestionIndex } = useQuiz();
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (currentQuestionIndex > 0 && quizRef.current) {
      quizRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentQuestionIndex]);

  return (
    <div className="w-full animate-fade-in-up">
      {/* Video 16:9 */}
      <div className="aspect-video w-full bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://candora.b-cdn.net/Candrora-Perfume.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Short text */}
      <div className="text-center px-4 py-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-1 font-medium">
          {t.landing.eyebrow}
        </p>
        <h1 className="text-2xl font-serif text-black mb-1 leading-tight">
          {t.landing.headline}{" "}
          <span className="text-gold-500 italic">
            {t.landing.headlineAccent}
          </span>
        </h1>
        <p className="text-sm text-gray-500 font-light leading-relaxed max-w-md mx-auto">
          {t.landing.bodyParagraph1}
        </p>

        {/* CTA button - scrolls to quiz */}
        {/* <button
          onClick={scrollToQuiz}
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl animate-pulse-glow"
        >
          <span className="uppercase tracking-[0.15em] font-bold text-sm">
            {t.landing.ctaButton}
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button> */}
      </div>

      {/* Divider */}
      {/* <div className="flex items-center gap-4 px-8 py-2">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-xs uppercase tracking-widest text-gray-400">
          {t.quiz.step} 1 {t.quiz.of} 8
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div> */}

      {/* Quiz section inline */}
      <div ref={quizRef}>
        <QuizSection />
      </div>
    </div>
  );
}
