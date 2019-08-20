import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-materialize";

const Input = ({ type, onChange, value }) => (
  <TextInput
    type={type}
    onChange={onChange}
    value={value}
    placeholder="ingrese tarea."
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Input;
