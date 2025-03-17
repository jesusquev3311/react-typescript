import { Provider } from "../src/components/ui/provider";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
