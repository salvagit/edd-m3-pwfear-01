import React, { useState } from "react";
import ListForm from "./ListForm";
import ListElement from "./ListElement";
import "./styles.css";

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
    <div className="row s12">
      <ListForm
        value={value}
        handleOnChangeInput={handleOnChangeInput}
        handleOnClickButton={handleOnClickButton}
      />

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
