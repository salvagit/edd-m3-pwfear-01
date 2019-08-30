import React from "react";
import { Collection } from "react-materialize";
import Product from "./Product";

const products = [
  {
    title: "Elemento 1",
    image: "https://materializecss.com/images/yuna.jpg"
  },
  {
    title: "Elemento 2",
    image: "https://materializecss.com/images/yuna.jpg"
  }
];

const Products = ({ addCartItem }) => (
  <Collection>
    {products.map((el, index) => (
      <Product key={index} {...el} onClick={() => addCartItem(el)} />
    ))}
  </Collection>
);

export default Products;
