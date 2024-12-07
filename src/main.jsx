import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import {store , persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
