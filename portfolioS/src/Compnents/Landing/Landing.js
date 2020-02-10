import React from "react";
import Name from "./LandName@2x.png";
import Logo from "./my_logo.png";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className={"contain"}>
      <div className="logo">
        <img className="revision " src={Logo} alt="vision" />
      </div>
      <div className="name">
        <img className="laname" src={Name} alt="" />
        <button className="start">
          <Link to={"/about"}>Enter</Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
