import React from "react";
import { Collection } from "react-materialize";
import ShopItem from "./ShopItem";

const items = [
  {
    title: "Item 1",
    id: 1,
    price: 10,
    image: "https://materializecss.com/images/yuna.jpg",
    description: "Description 1"
  },
  {
    title: "Item 2",
    id: 2,
    price: 20,
    image: "https://materializecss.com/images/yuna.jpg",
    description: "Description 2",
    star: true
  },
  {
    title: "Item 3",
    id: 3,
    price: 30,
    image: "https://materializecss.com/images/yuna.jpg",
    description: "Description 2",
    star: true
  },
  {
    title: "Item 4",
    id: 4,
    price: 40,
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
