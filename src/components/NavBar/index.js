import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
