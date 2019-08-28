import React from "react";

import ListElement from "./ListElement";
import "./styles.css";

const List = ({ elements, removeElement }) => (
  <ul>
    {elements.map((el, index) => {
      return <ListElement key={index} el={el} removeElement={removeElement} />;
    })}
  </ul>
);

export default List;
