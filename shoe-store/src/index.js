import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "@fontsource/merienda-one";
import "@fontsource/acme";
import "@fontsource/karla";
import "@fontsource/pt-sans-narrow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
