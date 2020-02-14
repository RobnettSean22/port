import React from "react";
import Name from "./LandName@2x.png";
import Logo from "./my_logo.png";
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
      </div>
      <div className="name">
        <img className="laname" src={Name} alt="" />
        <button onClick={toAbout} className="start">
          Enter
        </button>
      </div>
    </div>
  );
};

export default withRouter(Landing);
