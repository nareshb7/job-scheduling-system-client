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
      element: (
        <AuthProvider>
          <App />
        </AuthProvider>
      ),
      children: [],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ],
  { basename: "/" }
);

export default router;
