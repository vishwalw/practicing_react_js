import React, { Component } from "react";

export class Handleevent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "goodbye",
    });
  }
  render() {
    return (
      <div>
        <h2>Handle event</h2>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default Handleevent;
