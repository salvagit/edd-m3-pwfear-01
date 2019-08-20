import React from "react";
import { Navbar as NavbarMaterialize, NavItem } from "react-materialize";
import "./styles.css";

const NavBar = () => {
  return (
    <NavbarMaterialize brand={<NavItem>Todo List</NavItem>} centerLogo>
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </NavbarMaterialize>
  );
};

export default NavBar;
