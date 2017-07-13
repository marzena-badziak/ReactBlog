import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import thunk from "redux-thunk";
// import { connect } from "react-redux";
import session from "./posts/session-reducer";
import counter from "./posts/counter-reducer";
import posts from "./posts/posts-reducer";

const rootReducer = combineReducers({
  posts: posts,
  counter: counter,
  session: session
});

const enhancer = compose(applyMiddleware(thunk), persistState("session"));

const store = createStore(rootReducer, {}, enhancer);

export default store;
