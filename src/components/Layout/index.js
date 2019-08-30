import React from "react";
import Navbar from "../NavBar";

const Layout = props => (
  <div className="App">
    <Navbar title={props.title} />
    {/* <div className="row">
      <div className="row container s12">
      </div>
    </div> */}
    {props.children}
  </div>
);

export default Layout;
