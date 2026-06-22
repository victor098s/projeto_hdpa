import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Ponto de entrada do React: conecta o componente App ao elemento #root do HTML.
createRoot(document.getElementById("root")).render(
  // StrictMode ajuda a identificar efeitos colaterais e práticas inseguras durante o desenvolvimento.
  <StrictMode>
    <App />
  </StrictMode>,
);

