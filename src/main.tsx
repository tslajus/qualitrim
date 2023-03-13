import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/index.scss";
import { SectionContextProvider } from "./context/sectionContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SectionContextProvider>
      <App />
    </SectionContextProvider>
  </React.StrictMode>
);
