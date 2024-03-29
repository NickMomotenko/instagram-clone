import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import storeData from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const { store, persistor } = storeData();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
