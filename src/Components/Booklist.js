import React, { Component } from "react";
import { ThemeContext } from "../context/Themecontext";

export class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log({ theme });
    return (
      <div
        style={{
          background: theme.ui,
          color: theme.syntax,
        }}
      >
        <ul>
          <li>abc</li>
          <li>pqr</li>
          <li>xyz</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
