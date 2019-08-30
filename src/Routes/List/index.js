import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import List from "../../components/List";
import ListForm from "../../components/ListForm";

import { addElement, removeElement } from "../../actions/list";

const ListRoute = ({ addElement, elements, removeElement }) => {
  return (
    <Layout title="List">
      <ListForm elements={elements} addElement={addElement} />
      <List elements={elements} removeElement={removeElement} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  elements: state.list.elements
});

const mapDispatchToProps = dispatch => ({
  addElement: element => dispatch(addElement(element)),
  removeElement: element => dispatch(removeElement(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRoute);
