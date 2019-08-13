import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    console.log(
      `nuevas props :${props.value}`,
      `viejas props: ${this.props.value}`
    );
  }

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
