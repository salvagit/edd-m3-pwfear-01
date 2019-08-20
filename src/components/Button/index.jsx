import React from "react";
import { Button } from "react-materialize";

export default ({ text, onClick }) => (
  <Button waves="light" onClick={onClick}>
    {text}
  </Button>
);
