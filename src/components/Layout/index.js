import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../NavBar";
import Menu from "../Menu";

const Layout = props => (
  <div>
    <Navbar />
    <Container />
    <Row>
      <Col md={4}>
        <Menu />
      </Col>
      <Col md={8}>{props.children}</Col>
    </Row>
  </div>
);

export default Layout;
