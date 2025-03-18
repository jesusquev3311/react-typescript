import { Provider } from "../src/components/ui/provider";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { EventBusProvider } from "./hooks/useEventBusHook.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <EventBusProvider>
      <Provider>
        <App />
      </Provider>
    </EventBusProvider>
  </BrowserRouter>
);
