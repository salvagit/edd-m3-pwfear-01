import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import List from "../../components/List";
import ListForm from "../../components/ListForm";

import { addElement } from "../../actions/list";

const ListRoute = ({ addElement, elements }) => {
  return (
    <Layout>
      <ListForm elements={elements} addElement={addElement} />
      <List elements={elements} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  elements: state.list.elements
});

const mapDispatchToProps = dispatch => ({
  addElement: element => dispatch(addElement(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
