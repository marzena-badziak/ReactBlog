import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: "",
      registerPassword: ""
    };
  }
  registerEmail = event => {
    console.log("email typed!");
    this.setState({
      registerEmail: event.target.value
    });
  };
  registerPassword = event => {
    console.log("password typed!");
    console.log(this.state.registerPassword);
    this.setState({
      registerPassword: event.target.value
    });
  };
  registerNewUser = e => {
    e.preventDefault();
    axios.post("https://praktyki-react.herokuapp.com/api/v1/registrations", {
      user: { email: this.state.registerEmail , password: this.state.registerPassword}
    })
      .then(response => {
        this.props.dispatch({
          type: "REGISTER_NEW_USER",
          status: response.statusText,
          email: response.data.email
        });
        console.log(response);
        console.log(response.data.email);
        this.setState({
          status: response.statusText,
          newUser: response.data.email
        });
      })
      .catch(err => {
        console.dir(err);
      });
    console.log("register user clicked");
    console.log(this.state.email);
  };

  render() {
    return (
      <form>
        <label>New email:</label>
        <div>
          <input
            className="form-control"
            placeholder="enter email..."
            onChange={this.registerEmail}
            value={this.state.registerEmail}
          />
        </div>
        <br />
        <label>New password:</label>
        <div>
          <input
            type="password"
            className="form-control"
            placeholder="enter password..."
            onChange={this.registerPassword}
            value={this.state.registerPassword}
          />
        </div>
        <br />

        <button className="btn btn-success" onClick={this.registerNewUser}>
          register user
        </button>
        {this.state.newUser} {this.state.status}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(withRouter(LoginForm));
