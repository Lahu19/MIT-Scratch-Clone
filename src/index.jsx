import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import App from "./App";
import "./index.css";
import { store } from "./store";
// Getting the root from index.html file and applying the action
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with the specified ID was not found");
}

const appRoot = createRoot(rootElement);

appRoot.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </Provider>
);
