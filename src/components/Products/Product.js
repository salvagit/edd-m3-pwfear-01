import React from "react";
import { CollectionItem, Icon } from "react-materialize";

const Product = ({ image, title, onClick }) => (
  <CollectionItem className="avatar" onClick={onClick}>
    <img src={image} alt="" className="circle" />
    <span className="title">{title}</span>
    <p></p>
    <a href="/" className="secondary-content">
      <Icon>grade</Icon>
    </a>
  </CollectionItem>
);

export default Product;
