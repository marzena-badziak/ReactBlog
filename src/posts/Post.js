import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Button from "../user-interface/Button.js";

class Post extends Component {
  remove = e => {
    this.props.onRemove(this.props.timestamp);
    console.log("remove me!!!");
  };
  onHover = e => {};

  show = event => {
    console.log("show post");
    // console.log(event);
    this.props.dispatch({
      type: "SHOW_POST_DETAILS",
      postToShowId: this.props.timestamp
    });
    // console.log(this.props.timestamp);
    this.props.router.push("posts-details");
  };

  render() {
    return (
      <div>
        <p>
          <b>title:</b> {this.props.title}
        </p>
        <p>
          <b>timestamp:</b> {this.props.timestamp}
        </p>
        <p>
          <b>Content:</b> {this.props.content}
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
