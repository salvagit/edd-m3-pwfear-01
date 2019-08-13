import React, { Component } from "react";
import Button from "../Button";
import Input from "../Input";
import ListElement, { ListElementFunc } from "./ListElement";
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
            return <ListElement key={index} el={el} />;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
