import { useLanguage, useQuiz } from "@/hooks";

export default function QuizPage() {
  const { t } = useLanguage();
  const {
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    handleAnswer,
    handleBack
  } = useQuiz();

  if (!currentQuestion) {
    return null;
  }

  const currentStep = currentQuestionIndex + 1;
  const progress = (currentStep / totalQuestions) * 100;

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <div className="mb-6 flex justify-between items-center text-gold-700 text-sm tracking-widest uppercase">
          <span>{t.quiz.step} {currentStep} {t.quiz.of} {totalQuestions}</span>
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`hover:text-black transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            {t.quiz.back}
          </button>
        </div>

        {/* Question */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-serif text-black mb-6 leading-tight">
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="group relative w-full text-left p-4 border border-gray-200 hover:border-gold-500 transition-all duration-300 bg-white hover:shadow-lg rounded-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <span className="text-base text-gray-700 group-hover:text-black transition-colors">
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
