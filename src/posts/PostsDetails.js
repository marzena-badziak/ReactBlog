import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "../user-interface/Button";

class PostsDetails extends Component {
  goBack = e => {
    console.log("go back clicked");
    this.props.router.push("posts");
  }
  render() {
    console.log("postsdetails render");
    console.log(this.props.postToShow);
    // console.log("selected post id: " + this.props.posts.postToShowId);

    return (
      <StyledPostDetails>
        <div>Post details</div>
        <br />
        <div>
          <b>Title:</b>
        </div>
        <div>
          {this.props.postToShow.title}
        </div>
        <br />
        <div>
          <b>Content:</b>
        </div>
        <div>
          {this.props.postToShow.content}
        </div>
        <br />
        <div>
          <b>timestamp:</b>
        </div>
        <div>
          {this.props.postToShow.timestamp}
        </div>
        <br />
        <Button className="btn btn-default btn-xs" onClick={this.goBack} label="go back">
        </Button>
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
  console.log(state);
  return {
    postToShow: state.posts.postsCollection.find(p => {
      return p.timestamp === state.posts.postToShowId;
    })
  };
};

export default connect(mapStateToProps)(PostsDetails);
