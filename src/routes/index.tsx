import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import JobApplicationForm from "pages/jobApplicationForm";
import Dashboard from "pages/dashboard";
import ResumePage from "pages/resume";
import InterviewQuestionsPage from "pages/interviewQuestions";
import PortalApplicationInfo from "pages/dashboard/container/portalApplication/PortalApplicationInfo";
import ApplicationInfo from "pages/dashboard/container/mainApplication/ApplicationInfo";
import Profile from "pages/profile";

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
        {
          path: "portal/:id",
          element: <PortalApplicationInfo />,
        },
        {
          path: "application/:id",
          element: <ApplicationInfo />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ],
  { basename }
);

export default router;
