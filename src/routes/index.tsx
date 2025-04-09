import App from "../App";
import LoginPage from "pages/login";
import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "../authContext";
import SignupPage from "pages/signup";

const basename = process.env.PUBLIC_URL || "/";

console.log("base:::", basename);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ],
  { basename: "/" }
);

export default router;
