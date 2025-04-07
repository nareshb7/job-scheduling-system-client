import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./authContext";
import "./index.css";

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
