import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./my_logo.png";
import down from "./Down.png";

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
          <div className="projects">stuff</div>

          <div className="but">
            <Link to={"/portfolio/"}>
              <img src={down} alt="down" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
