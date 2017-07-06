import React from "react";
import Button from "./Button.js";







export class AlertButton extends React.Component {
  showAlert = () => {
    alert("alert!");
    // this.props.onClick();
  }
  render() {
    return (
      <Button {...this.props} className={"btn-success"} onClick={this.showAlert}/>
    );
  }
}


export default AlertButton;
