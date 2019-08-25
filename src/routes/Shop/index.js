import React from "react";
import { Row, Col } from "react-materialize";
import { connect } from "react-redux";
import { addCartItem } from "../../actions/cart";
import Items from "../../components/Items";
import Cart from "../../components/Cart";
import Layout from "../../components/Layout";

const Shop = ({ cart, addCartItem }) => (
  <Layout>
    <Row>
      <Col s={5}>
        <Items addCartItem={addCartItem} />
      </Col>
      <Col s={7}>
        <Cart items={cart.items} />
      </Col>
    </Row>
  </Layout>
);

const MapStateToProps = state => ({ cart: state.cart });

const MapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Shop);
