import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { fetchGenres } from "./store/featuresReducer/featuresReducer";

store.dispatch(fetchGenres);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
