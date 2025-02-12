import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { persistor, store } from "./store/store.ts";
import App from "./App.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NotificationProvider } from "./services/providers/NotificationProvider.tsx";
import { ThemeProvider } from "./services/providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor!}>
        <ThemeProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
