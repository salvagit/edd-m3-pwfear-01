import React from "react";
import { Navbar as NavbarMaterialize, NavItem } from "react-materialize";
import "./styles.css";

const NavBar = props => {
  return (
    <NavbarMaterialize brand={<NavItem>{props.title}</NavItem>} centerLogo>
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </NavbarMaterialize>
  );
};

export default NavBar;
