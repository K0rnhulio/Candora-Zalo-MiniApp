import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Language, AppState, UserAnswers, BlendResult, UserInfo } from "./types";
import { translations, Translations } from "./i18n";

// Language state - persisted to localStorage
export const languageAtom = atomWithStorage<Language>('candora_language', 'en');

// Derived atom for translations
export const translationsAtom = atom<Translations>((get) => {
  const language = get(languageAtom);
  return translations[language];
});

// App state
export const appStateAtom = atom<AppState>(AppState.WELCOME);

// Quiz state
export const currentQuestionIndexAtom = atom<number>(0);

// User answers
export const answersAtom = atom<UserAnswers>({});

// Blend result
export const resultAtom = atom<BlendResult | null>(null);

// User info from contact form
export const userInfoAtom = atom<UserInfo | null>(null);

// Loading state for async operations
export const isLoadingAtom = atom<boolean>(false);

// Error state
export const errorAtom = atom<string | null>(null);

// Computed atom: current question
export const currentQuestionAtom = atom((get) => {
  const t = get(translationsAtom);
  const index = get(currentQuestionIndexAtom);
  return t.quiz.questions[index];
});

// Computed atom: total questions
export const totalQuestionsAtom = atom((get) => {
  const t = get(translationsAtom);
  return t.quiz.questions.length;
});

// Computed atom: quiz progress percentage
export const quizProgressAtom = atom((get) => {
  const current = get(currentQuestionIndexAtom) + 1;
  const total = get(totalQuestionsAtom);
  return (current / total) * 100;
});

// Action atoms for state management
export const resetQuizAtom = atom(
  null,
  (get, set) => {
    set(appStateAtom, AppState.WELCOME);
    set(currentQuestionIndexAtom, 0);
    set(answersAtom, {});
    set(resultAtom, null);
    set(userInfoAtom, null);
    set(errorAtom, null);
  }
);

export const startQuizAtom = atom(
  null,
  (get, set) => {
    set(appStateAtom, AppState.QUIZ);
    set(currentQuestionIndexAtom, 0);
    set(answersAtom, {});
  }
);

export const goBackAtom = atom(
  null,
  (get, set) => {
    const currentIndex = get(currentQuestionIndexAtom);
    if (currentIndex > 0) {
      set(currentQuestionIndexAtom, currentIndex - 1);
    } else {
      set(appStateAtom, AppState.WELCOME);
    }
  }
);
