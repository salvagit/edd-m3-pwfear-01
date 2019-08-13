import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <nav class="">
      <div class="nav-wrapper">
        <a class="brand-logo center" />
        <a href="#!" data-target="mobile-nav" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="hide-on-med-and-down left">
          <li>
            <a>Getting started</a>
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
