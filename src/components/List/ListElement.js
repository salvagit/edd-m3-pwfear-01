import React from "react";
import { CollectionItem } from "react-materialize";

export default ({ index, el }) => (
  <CollectionItem key={index}>{el}</CollectionItem>
);
