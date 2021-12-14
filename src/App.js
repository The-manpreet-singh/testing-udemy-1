import React, { Component } from "react";
import "./App.css";

// function App() {
// const [count, setCount] = React.useState(0);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">
          The counter is currently&nbsp; {this.state.counter}
        </h1>
        {/* <span data-test="count">{count}</span> */}

        {/* <button data-test="increment-button" onClick={() => setCount(count + 1)}> */}
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
