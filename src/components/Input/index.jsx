import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  render() {
    const { type, onChange, value } = this.props;
    return <input type={type} onChange={onChange} value={value} />;
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Input;
