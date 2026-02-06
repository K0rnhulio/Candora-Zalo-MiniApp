import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { MutableRefObject, useCallback, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { UIMatch, useMatches, useNavigate } from "react-router-dom";
import {
  languageAtom,
  translationsAtom,
  appStateAtom,
  currentQuestionIndexAtom,
  answersAtom,
  resultAtom,
  resetQuizAtom,
  goBackAtom,
  totalQuestionsAtom,
} from "@/state";
import { Language, AppState, UserAnswers, BlendResult, UserInfo } from "@/types";
import { generateBlend } from "@/services/geminiService";
import { saveToDatabase } from "@/services/dbService";

export function useRealHeight(
  element: MutableRefObject<HTMLDivElement | null>,
  defaultValue?: number
) {
  const [height, setHeight] = useState(defaultValue ?? 0);
  useLayoutEffect(() => {
    if (element.current && typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const [{ contentRect }] = entries;
        setHeight(contentRect.height);
      });
      ro.observe(element.current);
      return () => ro.disconnect();
    }
    return () => {};
  }, [element.current]);

  if (typeof ResizeObserver === "undefined") {
    return -1;
  }
  return height;
}

// Language hook
export function useLanguage() {
  const [language, setLanguage] = useAtom(languageAtom);
  const t = useAtomValue(translationsAtom);

  return { language, setLanguage, t };
}

// Quiz flow hooks
export function useQuiz() {
  const navigate = useNavigate();
  const [appState, setAppState] = useAtom(appStateAtom);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);
  const [answers, setAnswers] = useAtom(answersAtom);
  const [result, setResult] = useAtom(resultAtom);
  const totalQuestions = useAtomValue(totalQuestionsAtom);
  const { language, t } = useLanguage();
  const resetQuiz = useSetAtom(resetQuizAtom);
  const goBack = useSetAtom(goBackAtom);

  const questions = t.quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = useCallback(async (answer: string) => {
    const questionId = questions[currentQuestionIndex].id;
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      // Small delay for UX feel
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    } else {
      // Quiz finished, navigate to loading and generate content
      setAppState(AppState.LOADING);

      // Use requestAnimationFrame + setTimeout to ensure ZMA is ready
      await new Promise(resolve => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 50);
        });
      });
      navigate('/loading', { replace: true });

      try {
        const blendResult = await generateBlend(newAnswers, language);
        setResult(blendResult);
        // Once generated, move to contact form
        setAppState(AppState.CONTACT_FORM);
        navigate('/contact', { replace: true });
      } catch (e) {
        console.error("Failed to generate", e);
        toast.error("Failed to generate your blend. Please try again.");
        setAppState(AppState.WELCOME);
        navigate('/', { replace: true });
      }
    }
  }, [answers, currentQuestionIndex, language, questions, navigate, setAnswers, setAppState, setCurrentQuestionIndex, setResult]);

  const handleContactSubmit = useCallback(async (userInfo: UserInfo) => {
    if (result) {
      // Save to DB with timeout - don't block navigation to result
      const saveWithTimeout = Promise.race([
        saveToDatabase(userInfo, answers, result),
        new Promise<boolean>((resolve) => setTimeout(() => {
          console.warn("Database save timed out after 10s, proceeding to result");
          resolve(false);
        }, 10000)),
      ]);

      saveWithTimeout
        .then((success) => {
          if (!success) console.warn("Database save failed or timed out");
        })
        .catch((err) => console.error("Database save error:", err));

      // Navigate to result immediately - don't wait for DB
      setAppState(AppState.RESULT);
      navigate('/result', { replace: true });
    }
  }, [result, answers, setAppState, navigate]);

  const handleBack = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex, setCurrentQuestionIndex]);

  const handleRestart = useCallback(() => {
    resetQuiz();
    navigate('/', { replace: true });
  }, [resetQuiz, navigate]);

  return {
    appState,
    currentQuestionIndex,
    currentQuestion,
    questions,
    totalQuestions,
    answers,
    result,
    handleAnswer,
    handleContactSubmit,
    handleBack,
    handleRestart,
  };
}

export function useRouteHandle() {
  const matches = useMatches() as UIMatch<
    undefined,
    {
      title?: string | Function;
      logo?: boolean;
      back?: boolean;
      scrollRestoration?: number;
    }
  >[];
  const lastMatch = matches[matches.length - 1];

  return [lastMatch.handle, lastMatch, matches] as const;
}
