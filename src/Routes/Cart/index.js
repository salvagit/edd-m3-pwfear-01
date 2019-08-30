import React from "react";
import { Row, Col } from "react-materialize";
import { connect } from "react-redux";

import { addCartItem } from "../../actions/cart";

import Layout from "../../components/Layout";
import Products from "../../components/Products";
import List from "../../components/List";

const Cart = ({ addCartItem, cartItems }) => (
  <Layout title="Cart">
    <Row>
      <Col s={4}>
        <Products addCartItem={addCartItem} />
      </Col>
      <Col s={8}>
        <List elements={cartItems} removeElement={el => console.log(el)} />
      </Col>
    </Row>
  </Layout>
);

const mapStateToProps = state => ({
  cartItems: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  addCartItem: element => dispatch(addCartItem(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
