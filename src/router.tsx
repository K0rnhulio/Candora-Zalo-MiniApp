import Layout from "@/components/layout";
import WelcomePage from "@/pages/welcome";
import QuizPage from "@/pages/quiz";
import LoadingPage from "@/pages/loading";
import ContactPage from "@/pages/contact";
import ResultPage from "@/pages/result";
import { createBrowserRouter } from "react-router-dom";
import { getBasePath } from "@/utils/zma";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <WelcomePage />,
        },
        {
          path: "/quiz",
          element: <QuizPage />,
        },
        {
          path: "/loading",
          element: <LoadingPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/result",
          element: <ResultPage />,
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
