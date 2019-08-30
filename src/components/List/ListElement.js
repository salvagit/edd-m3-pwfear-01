import React from "react";
import { CollectionItem } from "react-materialize";

import Button from "../Button";

const ListElement = ({ index, el, removeElement }) => (
  <CollectionItem key={index}>
    {el.title} <Button onClick={() => removeElement(el)}>eliminar</Button>
  </CollectionItem>
);

export default ListElement;
