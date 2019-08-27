import React, { useState } from "react";
import { connect } from "react-redux";

import { addElement } from "../../actions/list";

import ListForm from "./ListForm";
import ListElement from "./ListElement";
import "./styles.css";

const INITIAL_STATE = {
  value: "",
  elements: []
};

const List = ({ addElement, elements }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleOnChangeInput = evt => {
    setState({ ...state, value: evt.target.value });
  };

  const handleOnClickButton = evt => {
    evt.preventDefault();
    const { value } = state;
    if (!elements.includes(value)) {
      addElement(value);
      setState({ ...state, value: "" });
    }
  };

  const { value } = state;

  return (
    <div className="row s12">
      <ListForm
        value={value}
        handleOnChangeInput={handleOnChangeInput}
        handleOnClickButton={handleOnClickButton}
      />

      <ul>
        {elements.map((el, index) => {
          return <ListElement key={index} el={el} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  elements: state.list.elements
});

const mapDispatchToProps = dispatch => ({
  addElement: element => dispatch(addElement(element))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
