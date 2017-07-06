import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import store from "./store.js";
import LoginPage from "./LoginPage.js";

export class Layout extends Component {
  render() {
    return (
      <div>
        <NavStyle className="nav nav-tabs">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/posts-details">PostsDetails</Link>
            </li>
            <li>
              <Link to="/post-form">Add post</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <CounterStyle>
            Counter:
            {/* {this.props.postsCount} */}
            {this.props.postsCount > 0
              ? this.props.postsCount
              : `nie ma
            postów`}
          </CounterStyle>
          <div>
            {this.props.email !== undefined
              ? ` Hello ${this.props.email}!`
              : ``}
          </div>
        </NavStyle>
        {this.props.children}
      </div>
    );
  }
}
const NavStyle = styled.nav`
  display: flex;
  align-items: stretch;
  border: 1px dotted red;
`;

const CounterStyle = styled.div`
  font-weight: bold;
  padding: 15px 0;
  border: 1px dashed green;
`;

const mapStateToProps = state => {
  return {
    postsCount: state.posts.postsCollection.length,
    email: state.session.session
  };
};

export default connect(mapStateToProps)(Layout);
