import React from "react";
import Navbar from "../NavBar";

const Layout = props => (
  <div className="App">
    <Navbar />
    <div className="row">
      <div className="row container s12">{props.children}</div>
    </div>
  </div>
);

export default Layout;
