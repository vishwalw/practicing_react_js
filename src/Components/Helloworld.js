import React, { Component } from "react";

class Helloworld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "before",
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        Hello {this.props.message}
        <h1>Time {this.state.count}</h1>
        <button onClick={() => this.increaseCounter()}>increase</button>
      </div>
    );
  }
}

export default Helloworld;
