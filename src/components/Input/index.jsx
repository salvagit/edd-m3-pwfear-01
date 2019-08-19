import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Input = ({ type, onChange, value, ...props }) => (
  <Form.Control type={type} onChange={onChange} value={value} {...props} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Input;
