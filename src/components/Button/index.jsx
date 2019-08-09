import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  render() {
    const { text, onClick, backgroundColor } = this.props;
    return (
      <button style={{ backgroundColor }} onClick={onClick}>
        {text}
      </button>
    );
  }
}