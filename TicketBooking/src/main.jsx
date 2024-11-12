import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId = '561568913370-77f6bl356gcklvcjrfrm61hfecb6en85.apps.googleusercontent.com'>
    <StrictMode>
      <App />
    </StrictMode>
  </GoogleOAuthProvider>
);
