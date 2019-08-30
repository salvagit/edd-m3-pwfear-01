import React from "react";
import { Collection } from "react-materialize";
import ListElement from "./ListElement";
import "./styles.css";

const List = ({ elements, removeElement }) => (
  <Collection>
    {elements.map((el, index) => {
      return <ListElement key={index} el={el} removeElement={removeElement} />;
    })}
  </Collection>
);

export default List;
