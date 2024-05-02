import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { reduxStore } from "./Redux/Store/reduxStore.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </>
);
