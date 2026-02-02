import Layout from "@/components/layout";
import WelcomePage from "@/pages/welcome";
import LoadingPage from "@/pages/loading";
import ContactPage from "@/pages/contact";
import ResultPage from "@/pages/result";
import { createBrowserRouter, Navigate } from "react-router-dom";
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
          element: <Navigate to="/" replace />,
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
