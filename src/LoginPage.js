import React, { Component } from "react";
import apiClient from "./lib/api-client";
import { connect } from "react-redux";
// import styled from "styled-components";
import Button from "./user-interface/Button.js";
// import store from "./store.js";
import LoginForm from "./LoginForm";
import { logIn } from "./session-actions.js";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: ""
    };
  }

  updateEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  updatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.props.dispatch(
      logIn({
        email: this.state.email,
        password: this.state.password
      })
    );
  };

  render() {
    return (
      <div>
        <div>
          Login page
          <form>
            <label>Email:</label>
            <div>
              <input
                className="form-control"
                placeholder="enter email..."
                onChange={this.updateEmail}
                value={this.state.email}
              />
            </div>
            <label>Password:</label>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="enter password..."
                onChange={this.updatePassword}
                value={this.state.password}
              />
            </div>
            <br />

            <Button
              className="btn btn-success"
              onClick={this.login}
              label="login"
            />
          </form>
        </div>
        <br />
        <div>Register new user:</div>
        <LoginForm />
      </div>
    );
  }
}

export default connect()(LoginPage);
