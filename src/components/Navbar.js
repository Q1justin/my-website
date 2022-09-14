import React, { Component } from "react";
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";
 
export default class App extends Component {
  state = {
    isLoading: false,
  };
 
  render() {
    return (
      <Navbar
        isLoading={this.state.isLoading}
        menuItems={[
          {
            title: "Home",
            isAuth: true,
            onClick: () => {
              alert("If there is a home page...");
            },
          },
          {
            title: "About Me",
            isAuth: true,
            onClick: () => {
              alert("Its coffee time...");
            },
          },
          {
            title: "Projects",
            isAuth: true,
            onClick: () => {
              alert("Its coffee time...");
            },
          },
        ]}
      />
    );
  }
}
