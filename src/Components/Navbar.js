import React, { Component } from "react";
import ThemeContextProvider, { ThemeContext } from "../context/Themecontext";

export class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div>
              <nav
                style={{
                  backgroundColor: theme.bg,
                  color: theme.syntax,
                  background: theme.ui,
                }}
              >
                <h1>Context App</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
