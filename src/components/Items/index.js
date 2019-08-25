import React from "react";
import { Collection } from "react-materialize";
import ShopItem from "./ShopItem";

const items = [
  {
    title: "Item 1",
    image: "https://materializecss.com/images/yuna.jpg",
    description: "Description 1"
  },
  {
    title: "Item 2",
    image: "https://materializecss.com/images/yuna.jpg",
    description: "Description 2",
    star: true
  }
];

const Items = ({ addCartItem }) => (
  <Collection>
    {items.map((el, index) => (
      <ShopItem key={index} {...el} addCartItem={addCartItem} />
    ))}
  </Collection>
);

export default Items;
