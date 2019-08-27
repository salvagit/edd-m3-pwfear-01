import React from "react";

import ListElement from "./ListElement";
import "./styles.css";

const List = ({ elements }) => (
  <ul>
    {elements.map((el, index) => {
      return <ListElement key={index} el={el} />;
    })}
  </ul>
);

export default List;
