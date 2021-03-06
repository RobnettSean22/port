import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderLink.scss";

class HeaderLink extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="headerr">
        <NavLink className="off" activeClassName="on" to={"/home"}>
          Home
        </NavLink>
        <NavLink className="off" activeClassName="on" to={"/about"}>
          About
        </NavLink>
        <NavLink className="off" activeClassName="on" to={"/portfolio"}>
          Portfolio
        </NavLink>
        <NavLink className="off" activeClassName="on" to={"/resume"}>
          Resume
        </NavLink>
        <NavLink className="off" activeClassName="on" to={"/contact"}>
          Contact
        </NavLink>
      </div>
    );
  }
}

export default HeaderLink;
