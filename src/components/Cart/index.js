import React from "react";
import { connect } from "react-redux";
import List from "../List";

const Cart = ({ cartItems }) => {
  let totalCount = 0;
  let totalPrice = 0;

  cartItems.map(item => {
    totalCount += item.count;
    totalPrice += item.price * item.count;
    return item;
  });

  return (
    <List
      elements={[
        ...cartItems,
        { title: `Elements ${totalCount}` },
        { title: `Total ${totalPrice}` }
      ]}
    />
  );
};

const mapStateToProps = state => ({ cartItems: state.cart.items });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
