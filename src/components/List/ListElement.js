import React, { Component } from "react";

const ListElementFunc = ({ index, el }) => <li key={index}>{el}</li>;

class ListElement extends Component {
  componentWillMount() {
    console.log("ya me dibuje.");
  }

  render() {
    const { index, el } = this.props;
    return <li key={index}>{el}</li>;
  }
}

export default ListElement;
export { ListElementFunc };
