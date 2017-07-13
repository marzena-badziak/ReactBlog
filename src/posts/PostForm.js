import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import apiClient from "../lib/api-client";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  updateName = e => {
    this.setState({
      title: e.target.value
    });
  };
  updateContent = e => {
    this.setState({
      content: e.target.value
    });
  };
  Submit = event => {
    this.setState({
      title: ""
    });
    event.preventDefault();
    this.addPost({
      title: this.state.title,
      content: this.state.content
    });
  };
  addPost = post => {
    apiClient
      .post(
        "/example/api/v1/posts",
        {
          post: {
            title: post.title,
            body: post.content,
            user_id: this.props.session.user_id
          }
        },
        {
          headers: {
            "X-User-Email": this.props.session.email,
            "X-User-Token": this.props.session.token
          }
        }
      )
      .then(response => {
        this.props.router.push("posts");
      })
      .catch(err => {
        console.log(err);
      });

    // console.log(this.state.posts)
  };
  render() {
    return (
      <form>
        <label>Title:</label>
        <div>
          <input
            className="form-control"
            placeholder="enter title..."
            onChange={this.updateName}
            value={this.state.title}
          />
        </div>
        <br />
        <label>Content:</label>

        <div>
          <textarea
            className="form-control"
            placeholder="write something..."
            onChange={this.updateContent}
            value={this.state.content}
            style={{ width: "50vw" }}
          />
        </div>
        <br />

        <button className="btn btn-success" onClick={this.Submit}>
          {" "}add post{" "}
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts, session: state.session };
};

export default connect(mapStateToProps)(withRouter(PostForm));
