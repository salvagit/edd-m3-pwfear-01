import React, { Component } from "react";
import Button from "../Button";
const ListElementFunc = ({ index, el }) => <li key={index}>{el}</li>;

class ListElement extends Component {
  componentWillMount() {
    console.log("ya me dibuje.");
  }

  render() {
    const { index, el, removeElement } = this.props;
    return (
      <li key={index}>
        {el} <Button onClick={() => removeElement(el)}>eliminar</Button>
      </li>
    );
  }
}

export default ListElement;
export { ListElementFunc };
