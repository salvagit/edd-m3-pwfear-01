import React, { useState } from "react";
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
      <form action="#">
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
      </form>
      <ul>
        {console.log(state, setState)}
        {elements.map((el, index) => {
          return <ListElement key={index} el={el} />;
        })}
      </ul>
    </div>
  );
};

export default List;
