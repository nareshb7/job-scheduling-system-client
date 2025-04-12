import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import JobApplicationForm from "pages/jobApplicationForm";
import Dashboard from "pages/dashboard";
import ResumePage from "pages/resume";

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
      ],
    },
  ],
  { basename }
);

export default router;
