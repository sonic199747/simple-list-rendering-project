import React, { Component } from "react";

class Like extends Component {
  state = {
    toggle: false,
    color: "",
  };
  handleClick = () => {
    // console.log("clicked");
    switch (this.state.toggle) {
      case true:
        this.setState({ toggle: false, color: "" });
        break;
      case false:
        this.setState({ toggle: true, color: "Tomato" });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <span
        onClick={() => this.handleClick()}
        style={{ color: this.state.color }}
      >
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
    );
  }
}

export default Like;
