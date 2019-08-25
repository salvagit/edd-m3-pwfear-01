import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-materialize";

import { addElement } from "../../actions/list";
import Layout from "../Layout";
import List from "../List";
import ListForm from "../ListForm";

const ListElements = ({ elements, addElement }) => (
  <Layout>
    <Row>
      <Col s={4}>
        <ListForm elements={elements} addElement={addElement} />
      </Col>
      <Col s={8}>
        <List elements={elements} />
      </Col>
    </Row>
  </Layout>
);

const mapStateToProps = state => ({
  elements: state.list.elements
});

const mapDispatchToProps = dispatch => ({
  addElement: element => dispatch(addElement(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListElements);
