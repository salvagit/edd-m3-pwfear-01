import React from "react";
import { connect } from "react-redux";
import List from "../List";

const Cart = ({ cartItems }) => <List elements={cartItems} />;

const mapStateToProps = state => ({ cartItems: state.cart.items });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
