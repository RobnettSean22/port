import React from "react";
import Name from "./LandName@2x.png";
import Logo from "./my_logo.png";
import HeaderLink from "../HeaderLink/HeaderLink";
import { withRouter } from "react-router-dom";
import "./Landing.scss";

const Landing = props => {
  function toAbout() {
    props.history.push("/about");
  }
  return (
    <div className={"contain"}>
      <div className="logo">
        <img className="revision " src={Logo} alt="vision" />
        <HeaderLink />
      </div>
      <div className="name">
        <img className="laname" src={Name} alt="" />
        <button onClick={toAbout} className="start">
          Enter
        </button>
      </div>
      <div className="statement">
        <h1>Create Build Learn</h1>
      </div>
    </div>
  );
};

export default withRouter(Landing);
