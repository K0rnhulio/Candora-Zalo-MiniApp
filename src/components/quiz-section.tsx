import { useLanguage, useQuiz } from "@/hooks";

export default function QuizSection() {
  const { t } = useLanguage();
  const {
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    handleAnswer,
    handleBack,
  } = useQuiz();

  if (!currentQuestion) {
    return null;
  }

  const currentStep = currentQuestionIndex + 1;
  const progress = (currentStep / totalQuestions) * 100;

  const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>, option: string) => {
    // Blur immediately to prevent focus highlight on mobile
    e.currentTarget.blur();
    handleAnswer(option);
  };

  return (
    <div id="quiz-section" className="w-full px-4 pb-6 pt-2">
      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <div className="mb-6 flex justify-between items-center text-gold-700 text-sm tracking-widest uppercase">
          <span>
            {t.quiz.step} {currentStep} {t.quiz.of} {totalQuestions}
          </span>
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`hover:text-black transition-colors ${currentStep === 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            {t.quiz.back}
          </button>
        </div>

        {/* Question */}
        <div key={currentQuestionIndex} className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-serif text-black mb-6 leading-tight">
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={`q${currentQuestionIndex}-opt${idx}`}
                onClick={(e) => onOptionClick(e, option)}
                className="quiz-option relative w-full text-left p-4 border border-gray-200 transition-all duration-150 bg-white rounded-sm overflow-hidden active:scale-[0.98] active:bg-gold-50 active:border-gold-500 focus:outline-none"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="quiz-option-bar absolute top-0 left-0 w-1 h-full bg-gold-500 transform -translate-x-full transition-transform duration-300 ease-out"></div>
                <span className="quiz-option-text text-base text-gray-700 transition-colors">
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
