import React, { Component } from "react";

const COLORS = ["blue", "pink", "green"];

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  handleClick() {
    let color = COLORS[Math.floor(Math.random() * COLORS.length)];
    console.log(color);
    this.setState({ color });
  }

  render() {
    const { text } = this.props;
    return (
      <button
        style={{ backgroundColor: this.state.color }}
        onClick={() => this.handleClick()}
      >
        {text}
      </button>
    );
  }
}
