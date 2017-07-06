import { createStore, combineReducers } from "redux";
import { connect } from "react-redux";
import session from "./posts/session-reducer";
import counter from "./posts/counter-reducer";
import posts from "./posts/posts-reducer";

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});

const store = createStore(rootReducer);

export default store;
