import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import apiClient from "../lib/api-client";
import { withRouter } from "react-router";
import _ from "lodash";
// import PostForm from "./PostForm.js";
// import PostList from "./PostList.js";
import PostListModified from "./PostList.js";
import AlertButton from "../user-interface/AlertButton.js";

// import store from "../store.js";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  removePost = postId => {
    console.log("inside removePost");
    apiClient
      .delete("/example/api/v1/posts/" + postId, {
        headers: {
          "X-User-Email": this.props.session.email,
          "X-User-Token": this.props.session.token
        }
      })
      .then(this.fetchPosts)
      .catch(err => {
        console.log(err);
      });
  };
  search = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  fetchPosts = () => {
    apiClient
      .get("/example/api/v1/posts/", {
        headers: {
          "X-User-Email": this.props.session.email,
          "X-User-Token": this.props.session.token
        }
      })
      .then(response => {
        this.props.dispatch({
          type: "FETCH_POSTS",
          getPosts: response.data.posts
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const postsToRender = this.props.posts.filter(p =>
      p.title.includes(this.state.searchText)
    );

    const orderedPosts = _.orderBy(postsToRender, ["title"]);

    return (
      <div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#d9d9d9",
            border: "2px solid #808080",
            margin: "10px",
            padding: "10px"
          }}
        >
          {/* <PostForm onSubmit={this.addPost}/> */}
          <div>
            <b>Search:</b>{" "}
            <input
              className="form-control"
              placeholder="what r u looking for?"
              value={this.state.searchText}
              onChange={this.search}
            />
          </div>
        </div>
        <StyledPostList posts={orderedPosts} onRemove={this.removePost} />
        <AlertButton label="click me" />
        <AlertButton label="me too" />
      </div>
    );
  }
}

const StyledPostList = styled(PostListModified)`
  margin-top: 30px;
`;
const mapStateToProps = state => {
  return { posts: state.posts.postsCollection, session: state.session };
};

export default connect(mapStateToProps, null)(withRouter(PostsPage));
