import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, onChange, value }) => (
  <input type={type} onChange={onChange} value={value} />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Input;
