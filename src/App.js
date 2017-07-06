import React, { Component } from "react";
import { Router, Route, IndexRoute, Link, hashHistory } from "react-router";
import styled from "styled-components";
import PostForm from "./posts/PostForm.js";
import PostsPage from "./posts/PostsPage.js";
import PostsDetails from "./posts/PostsDetails.js";
import LoginPage from "./LoginPage.js";
import Layout from "./Layout.js";
import Home from "./Home.js";

// import PropTypes from 'prop-types';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#e6e6e6",
          margin: "20px",
          padding: "5px"
        }}
      >
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="login" component={LoginPage} />
            <Route path="post-form" component={PostForm} />
            <Route path="posts-details" component={PostsDetails} />
            <Route path="posts" component={PostsPage} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
