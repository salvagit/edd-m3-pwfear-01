import React from "react";
import { Row } from "react-materialize";
import Input from "../Input";
import Button from "../Button";

const ListForm = ({ value, handleOnChangeInput, handleOnClickButton }) => {
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
