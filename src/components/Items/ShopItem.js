import React from "react";
import { CollectionItem, Icon } from "react-materialize";

const ShopItem = item => {
  const { image, title, description, star, addCartItem } = item;

  return (
    <CollectionItem className="avatar">
      <div onClick={() => addCartItem(item)}>
        <img src={image} className="circle" alt="" />
        <span className="title">{title}</span>
        <p>{description}</p>
        {star && (
          <a href="/" className="secondary-content">
            <Icon children="grade" />
          </a>
        )}
      </div>
    </CollectionItem>
  );
};

export default ShopItem;
