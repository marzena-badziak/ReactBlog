import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Button from "../user-interface/Button.js";

class Post extends Component {
  remove = e => {
    // console.log("remover - function in Post");
    this.props.onRemove(this.props.id);
  };
  // onHover = e => {};

  show = event => {
    // console.log(event);
    this.props.dispatch({
      type: "SHOW_POST_DETAILS",
      postToShowId: this.props.id
      // postToShowId: this.props.timestamp
    });
    // console.log(this.props.timestamp);
    // console.log(event);
    this.props.router.push("posts-details/" + this.props.id);
  };

  render() {
    return (
      <div>
        <p>
          <b>title:</b> {this.props.title}
        </p>
        <p>
          <b>id:</b> {this.props.id}
        </p>
        <p>
          <b>Content:</b> {this.props.body}
        </p>
        <Button
          className="btn btn-danger btn-xs"
          onClick={this.remove}
          onMouseOverr={this.onHover}
          label={"remove"}
        />
        <Button
          className="btn btn-success btn-xs"
          onClick={this.show}
          label={"show details"}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postToShowId: state.posts.postToShowId
  };
};

export default connect(mapStateToProps)(withRouter(Post));
