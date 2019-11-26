import React, { Component } from "react";
import "./Resume.scss";
import logo from "./my_logo.png";

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="sec">
          <div className="cover">
            <div className="logo-place">
              <img className="lo-go" src={logo} alt="tl" />
            </div>
            <div className="title">
              <h1>Resume</h1>
            </div>
            <div className="hold">
              <div className="left">
                <p></p>
              </div>
              <div className="skills">
                <img />
              </div>
              <div className="right">
                <p></p>
              </div>
            </div>

            <div className="but"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
