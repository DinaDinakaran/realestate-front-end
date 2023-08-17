import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-e6o6gnqwv3uw4kjr.us.auth0.com"
     clientId="0uX9gUMha1fZj6jf5F6zWPb0rjwy5aqw"
     authorizationParams={{
      redirect_uri: "https://homyz-realestate-app.netlify.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
