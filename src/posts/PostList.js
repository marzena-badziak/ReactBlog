import React, { Component } from 'react';
import Post from "./Post.js";
import styled from 'styled-components';


class PostList extends Component {
  render() {
    return (
      <div className={this.props.className} style={{
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column-reverse"
      }}
      >
        {this.props.posts.map( p =>
          <StyledPost key={p.timestamp}>
            <Post
              onRemove={this.props.onRemove}
              title={p.title}
              timestamp={p.timestamp}
              content={p.content}
            />
          </StyledPost>
          )}
      </div>
    )
  }
}

const StyledPost = styled.div`
  border: 1px dotted #808080;
  margin: 10px;
  padding: 5px;


`;

export default PostList;
