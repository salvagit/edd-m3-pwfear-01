import React from "react";
import { CollectionItem } from "react-materialize";

export default ({ index, el }) => {
  return (
    <CollectionItem key={index}>
      {`${el.title} Cantidad: ${el.count}`}
    </CollectionItem>
  );
};
