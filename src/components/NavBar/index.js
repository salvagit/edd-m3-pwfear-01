import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <nav className="">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">
          {" "}
        </a>
        <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="hide-on-med-and-down left">
          <li>
            <a href="/">Getting started</a>
          </li>
          <li>
            <a href="components.html">Components</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
