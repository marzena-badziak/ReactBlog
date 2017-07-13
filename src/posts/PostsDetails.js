import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "../user-interface/Button";
import apiClient from "../lib/api-client.js";

class PostsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  goBack = e => {
    this.props.router.push("posts");
  };
  componentDidMount() {
    // console.log("inside componentDidMount");
    // console.log(this.props);
    apiClient
      .get("/example/api/v1/posts/" + this.props.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          content: response.data.body,
          post: response.data
        });
        // console.log(response);
        console.log(response.data.title);
      })
      .catch(err => {});
  }
  render() {
    // console.log(this.state.post);
    // console.log("inside PostsDetails render");
    // console.log(this.state);
    // console.log(this.props.postToShow);
    // console.log("selected post id: " + this.props.posts.postToShowId);

    return (
      <StyledPostDetails>
        <div>Post details</div>
        <br />
        <div>
          <b>Title:</b>
        </div>
        <div>
          {this.state.title}
        </div>
        <br />
        <div>
          <b>Content:</b>
        </div>
        <div>
          {this.state.content}
        </div>
        <br />
        <div>
          <b>id:</b>
        </div>
        <div>
          {this.state.id}
        </div>
        <br />
        <Button
          className="btn btn-default btn-xs"
          onClick={this.goBack}
          label="go back"
        />
      </StyledPostDetails>
    );
  }
}

const StyledPostDetails = styled.div`
  border: 1px dotted #808080;
  margin: 50px;
  padding: 20px;
`;

const mapStateToProps = state => {
  return {
    postToShow: state.posts.postsCollection.find(p => {
      return p.timestamp === state.posts.postToShowId;
    })
  };
};

export default connect(mapStateToProps)(PostsDetails);
