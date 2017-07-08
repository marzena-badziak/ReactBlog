import React, { Component } from "react";
// import Post from "./Post.js";
import PostList from "./PostList.js";
// import styled from "styled-components";

export class PostListModified extends Component {
  render() {
    let postsWithIndex = this.props.posts.map((val, index) => {
      let newTitle;
      if (index % 2 === 0) {
        newTitle = val.title + " Nieparzysty";
      } else {
        newTitle = val.title + " Parzysty";
      }
      return { ...val, title: newTitle };
    });

    return <PostList {...this.props} posts={postsWithIndex} />;
  }
}

export default PostListModified;
