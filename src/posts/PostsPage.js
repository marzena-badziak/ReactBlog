import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import PostForm from "./PostForm.js";
import PostList from "./PostList.js";
import PostListModified from "./PostListModified.js";
import AlertButton from "../user-interface/AlertButton.js";

import store from '../store.js';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.removePost = this.removePost.bind(this);
  }

  removePost = timestamp => {
    this.props.dispatch({type: 'REMOVE_POST',  posts: this.props.posts.filter(p => {
      return p.timestamp !== timestamp
    })});
  }
  search = (e) => {
    this.setState({
      searchText: e.target.value
    });
    console.log("search : " + e.target.value);
  }

  render() {
    const postsToRender = this.props.posts.filter(p =>
      p.title.includes(this.state.searchText)
    );

      return (
        <div>
          <div style={{
            display: "flex",
            alignSelf: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#d9d9d9",
            border: "2px solid #808080",
            margin: "10px",
            padding: "10px"}}>
          {/* <PostForm onSubmit={this.addPost}/> */}
          <div>
            <b>Search:</b> <input
              className="form-control"
              placeholder="what r u looking for?"
              value={this.state.searchText}
              onChange={this.search}/></div>
          </div>
          <StyledPostList posts={postsToRender} onRemove={this.removePost}/>
          <AlertButton label="click me"/>
          <AlertButton label="me too"/>

        </div>
      )
    };
}

const StyledPostList = styled(PostListModified)`
  margin-top: 30px;
`;
const mapStateToProps = (state) => {
  return {posts: state.posts.postsCollection};
}

export default connect(mapStateToProps, null)(PostsPage);
