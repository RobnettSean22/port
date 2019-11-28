import React, { Component } from "react";
import logo from "./my_logo.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-go" src={logo} alt="tl" />
          </div>
          <div className="title">
            <h1>Portfolio</h1>
          </div>
          <div className="projects"></div>

          <div className="but"></div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
