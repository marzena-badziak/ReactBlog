import React from "react";

class Button extends React.Component {

  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.props.onClick}
        onMouseOver={this.props.onMouseOverr}
      >
      {this.props.label}
    </button>
  )
  }
};

export default Button;
