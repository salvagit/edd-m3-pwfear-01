import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "../Button";
import Input from "../Input";
import ListElement from "./ListElement";

const INITIAL_STATE = {
  value: "",
  elements: []
};

const List = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleOnChangeInput = evt => {
    setState({ ...state, value: evt.target.value });
  };

  const handleOnClickButton = evt => {
    evt.preventDefault();
    const { elements, value } = state;
    if (!elements.includes(value)) {
      elements.push(value);
      setState({ ...state, value: "" });
    }
  };

  const { value, elements } = state;

  return (
    <div>
      <Form controlId="ListForm">
        <Form.Group>
          <Row>
            <Input
              size="lg"
              type="text"
              onChange={evt => handleOnChangeInput(evt)}
              value={value}
              placeholder="Ingresar Item."
              className="col-md-7"
            />
            <Button
              variant="primary"
              className="col-md-3"
              text="Agregar"
              onClick={evt => handleOnClickButton(evt)}
              backgroundColor="gray"
            />
          </Row>
        </Form.Group>
      </Form>
      <Row>
        <ul>
          {elements.map((el, index) => {
            return <ListElement key={index} el={el} />;
          })}
        </ul>
      </Row>
    </div>
  );
};

export default List;
