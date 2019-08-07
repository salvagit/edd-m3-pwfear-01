import React, { Component } from "react";

class List extends Component {
  state = {
    value: "",
    elements: []
  };

  handleOnChangeInput(evt) {
    this.setState({ value: evt.target.value });
  }

  handleOnClickButton(evt) {
    evt.preventDefault();
    this.state.elements.push(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <form action="#">
          <input
            type="text"
            onChange={evt => this.handleOnChangeInput(evt)}
            value={this.state.value}
          />
          <button onClick={evt => this.handleOnClickButton(evt)}>
            agregar
          </button>
        </form>
        <ul>
          {this.state.elements.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
