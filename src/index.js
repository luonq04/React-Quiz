import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.js";
// import { QuizProvider } from "./contexts/QuizContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <QuizProvider> */}
    <App />
    {/* </QuizProvider> */}
  </React.StrictMode>
);
