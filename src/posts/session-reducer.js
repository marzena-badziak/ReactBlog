const initialState = {
  session: ""
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, session: action.email };
    case "LOGOUT":
      return { ...state, session: "" };
    case "REGISTER_NEW_USER":
      return { ...state, session: action.email };
    default:
      return state;
  }
};

export default session;
