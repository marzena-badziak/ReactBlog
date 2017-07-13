import React, { Component } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Button from "./user-interface/Button";

// import store from "./store.js";
// import LoginPage from "./LoginPage.js";

export class Layout extends Component {
  logout = event => {
    this.props.dispatch({
      type: "LOGOUT",
      session: ""
    });

    console.log("logout clicked");
    this.props.router.push("/");
  };
  render() {
    return (
      <div>
        <NavStyle className="nav nav-tabs">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          {this.props.email !== ""
            ? <ul className="nav navbar-nav">
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                {/* <li>
                  <Link to="/posts-details">PostsDetails</Link>
                </li> */}
                <li>
                  <Link to="/post-form">Add post</Link>
                </li>
              </ul>
            : null}
          <CounterStyle>
            Counter:
            {/* {this.props.postsCount} */}
            {this.props.postsCount > 0
              ? this.props.postsCount
              : `nie ma
            postów`}
          </CounterStyle>
          <div>
            {this.props.email !== ""
              ? <div>
                  <p>
                    Hello {this.props.email}!
                  </p>
                  <Button label="logout" onClick={this.logout} />
                </div>
              : ``}
          </div>
        </NavStyle>

        {/* this.props.children - czyli poniżej
          wyrenderowane będzie jedno z dzieci (dostępnych w app.js jako <Route path...>) */}
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
