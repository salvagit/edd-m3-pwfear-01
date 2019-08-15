import React from "react";
import Navbar from "../NavBar";
import Menu from "../Menu";

const Layout = props => (
  <div className="App">
    <Navbar />
    <div className="container">
      <Menu />
      {props.children}
    </div>
  </div>
);

export default Layout;
