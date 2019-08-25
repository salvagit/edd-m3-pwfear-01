import React from "react";
import Navbar from "../NavBar";

const Layout = props => (
  <div className="App">
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
