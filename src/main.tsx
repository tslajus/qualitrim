import React from "react";
import ReactDOM from "react-dom/client";
import "@/sass/index.scss";
import App from "./App";
import { Provider } from "./context/pageContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
