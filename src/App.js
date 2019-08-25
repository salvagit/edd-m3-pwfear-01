import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import App from "./components/App";
import "./App.css";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
