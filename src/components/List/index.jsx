import React, { Component } from "react";
import Button from "../Button";
import Input from "../Input";

class List extends Component {
  state = {
    value: "",
    elements: []
  };

  handleOnChangeInput(evt) {
    this.setState({ value: evt.target.value }, console.log(this.state));
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
          <Input
            type="text"
            onChange={evt => this.handleOnChangeInput(evt)}
            value={this.state.value}
          />
          <Button
            text="Agregar"
            onClick={evt => this.handleOnClickButton(evt)}
            backgroundColor="gray"
          />
        </form>
        <ul>
          {this.state.elements.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
