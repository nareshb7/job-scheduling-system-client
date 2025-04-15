import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import JobApplicationForm from "pages/jobApplicationForm";
import Dashboard from "pages/dashboard";
import ResumePage from "pages/resume";
import InterviewQuestionsPage from "pages/interviewQuestions";

const basename = process.env.PUBLIC_URL || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "application-form",
          element: <JobApplicationForm />,
        },
        {
          path: "resume-list",
          element: <ResumePage />,
        },
        {
          path: "interview-questions",
          element: <InterviewQuestionsPage />,
        },
      ],
    },
  ],
  { basename }
);

export default router;
