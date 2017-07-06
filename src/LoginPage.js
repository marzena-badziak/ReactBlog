import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "./user-interface/Button.js";
import store from "./store.js";

export class LoginPage extends Component {
  updateEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  login = e => {
    e.preventDefault();
    // axios
    //   .post("http://192.168.10.127:3001/sign-in", {
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log("login clicked");
    console.log(this.state.email);
    this.props.dispatch({
      type: "LOGIN",
      email: this.state.email
    });
  };

  render() {
    return (
      <div>
        Login page
        <form>
          <label>Email:</label>
          <div>
            <input
              className="form-control"
              placeholder="enter email..."
              onChange={this.updateEmail}
              // value={this.state.email}
            />
          </div>
          <label>Password:</label>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="enter password..."
              // onChange={this.updateName}
              // value={this.state.title}
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
    );
  }
}

export default connect()(LoginPage);
