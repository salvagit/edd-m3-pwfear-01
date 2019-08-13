import React from "react";
import Navbar from "./components/NavBar";
import Menu from "./components/Menu";
import "./App.css";

import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Menu />
        <List />
      </div>
    </div>
  );
}

export default App;
