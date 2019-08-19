import React from "react";
import { Button } from "react-bootstrap";

export default ({ text, onClick, ...props }) => (
  <Button onClick={onClick} {...props}>
    {text}
  </Button>
);
