import React, { Component } from "react";
import Name from "./LandName@2x.png";
import Logo from "./my_logo.png";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <div className="contain">
        <div className="name">
          <img className="laname" src={Name} alt="" />
          <button className="start">Enter</button>
        </div>
        <div className="logo">
          <img className="revision " src={Logo} alt="vision" />
        </div>
      </div>
    );
  }
}

export default Landing;
