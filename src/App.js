import React from "react";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./utils/store";

import "./App.css";

import List from "./components/List";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <List />
      </Layout>
    </Provider>
  );
}

export default App;
