import apiClient from "./lib/api-client";
import { hashHistory } from "react-router";

export const logIn = user => {
  console.log("inside login");
  return dispatch => {
    return apiClient
      .post("/api/v1/sessions", {
        user: { email: user.email, password: user.password }
      })
      .then(response => {
        // this below is only a promise. redux-thunk is needed
        dispatch({
          type: "LOGIN",
          email: user.email,
          token: response.data.data.auth_token,
          user_id: response.data.data.user_id
        });
        hashHistory.push("posts");
      })
      .catch(err => {
        console.log(err);
      });
  };
};
