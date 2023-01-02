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
import { Provider } from "react-redux";
import store from "./stores/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
