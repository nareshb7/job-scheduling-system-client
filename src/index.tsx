import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import AuthProvider from "./authContext";
import "./index.css";
import router from "./routes";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(<RouterProvider router={router} />);
}
