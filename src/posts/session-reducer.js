const session = (state = "", action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, session: action.email };
    case "LOGOUT":
      return { ...state, session: "" };
    default:
      return state;
  }
};

export default session;
