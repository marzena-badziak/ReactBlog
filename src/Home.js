import React, { Component } from "react";
import { connect } from "react-redux";
// import store from './store.js';

class Home extends Component {
  increment = () => this.props.dispatch({ type: "INCREMENT" });
  decrement = () => this.props.dispatch({ type: "DECREMENT" });

  render() {
    return (
      <div>
        home, counter: {this.props.counter}
        <div>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      </div>
    );
  }
}
// this runction must return an object
const mapStateToProps = state => {
  return { counter: state.counter };
};

// connect home to store. mapStateToProps will inject {state} props to Home:
export default connect(mapStateToProps)(Home);

// example - how the above connect function works:
// const injectProp = (props) => {
//   return (Component) => {
//     return <Component {...props} />
//   }
// }
// const injectDefaultName = injectProp({name: "Default name"});
// injectDefaultName(Home);
