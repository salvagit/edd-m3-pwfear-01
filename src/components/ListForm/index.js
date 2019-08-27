import React, { useState } from "react";
import { Row } from "react-materialize";

import Input from "../Input";
import Button from "../Button";

const INITIAL_STATE = {
  value: ""
};

const ListForm = ({ addElement, elements }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleOnChangeInput = evt => {
    setState({ ...state, value: evt.target.value });
  };

  const { value } = state;

  const handleOnClickButton = evt => {
    evt.preventDefault();
    if (!elements.includes(value)) {
      addElement(value);
      setState({ ...state, value: "" });
    }
  };

  return (
    <form action="#">
      <Row className="form-container">
        <Input
          type="text"
          onChange={evt => handleOnChangeInput(evt)}
          value={value}
        />
        <Button
          text="Agregar"
          onClick={evt => handleOnClickButton(evt)}
          backgroundColor="gray"
        />
      </Row>
    </form>
  );
};

export default ListForm;
