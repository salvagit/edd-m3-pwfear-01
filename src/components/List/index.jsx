import React from "react";
import { Collection } from "react-materialize";
import ListElement from "./ListElement";
import "./styles.css";

const List = ({ elements }) => (
  <Collection>
    {elements.map((el, index) => (
      <ListElement key={index} el={el} />
    ))}
  </Collection>
);

export default List;
