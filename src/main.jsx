import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { APIProvider } from "@vis.gl/react-google-maps";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </APIProvider>
);
