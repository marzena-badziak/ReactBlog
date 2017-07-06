import React, { Component } from 'react';
import Button from "../user-interface/Button.js";

class Post extends Component {
remove = e => {
    this.props.onRemove (this.props.timestamp);
    console.log("remove me!!!");
  }
  onHover = e => {
    console.log("hover" + e);
  }
  render() {
    return (
      <div>
        <p><b>title:</b> {this.props.title}</p>
        <p><b>timestamp:</b> {this.props.timestamp}</p>
        <p><b>Content:</b> {this.props.content}</p>
        <Button className="btn btn-danger btn-xs" onClick={this.remove} onMouseOverr={this.onHover} label={"remove"}/>
      </div>
    )
  }
}

export default Post;
