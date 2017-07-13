const initialState = {
  session: ""
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, session: action.email, token: action.token, email: action.email, user_id: action.user_id};
    case "LOGOUT":
      return { ...state, session: "" };
    case "REGISTER_NEW_USER":
      return { ...state, session: action.email, token: action.token, email: action.email, user_id: action.user_id };
    default:
      return state;
  }
};

export default session;
