import React, { Component } from "react";
import { ThemeContext } from "../context/Themecontext";

export class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
