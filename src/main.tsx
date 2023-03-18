import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/index.scss";
import { PageContextProvider } from "./context/PageContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
);
