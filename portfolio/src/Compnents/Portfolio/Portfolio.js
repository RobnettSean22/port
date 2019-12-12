import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import logo from "./my_logo.png";
import {
  FaArrowCircleLeft,
  FaArrowCircleDown,
  FaArrowCircleRight,
  FaArrowCircleUp
} from "react-icons/fa";
import down from "./Down.png";
import up from "./Up.png";
import "./Portfolio.scss";
import knmhome from "./KanjiNme-home.png";
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      slideKNM: [knmhome]
    };
  }
  render() {
    const { slideKNM } = this.state;
    return (
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-go" src={logo} alt="tl" />
            <HeaderLink />
          </div>
          <div className="title">
            <h1>Portfolio</h1>
          </div>
          <div className="projects">
            <div className="p1">
              <h2></h2>
              <p></p>
            </div>
            <div className="p2">
              <div className="slideshow">
                <FaArrowCircleLeft className="arrows" />
                <div className="web-still-container">
                  <img src={slideKNM} alt="home" />
                </div>
                <FaArrowCircleRight className="arrows" />
              </div>
              <div className="headingKNM">
                <h1>
                  Kanji <span>N</span> Me
                </h1>
              </div>

              <p>dfsdfsd</p>
            </div>
            <div className="p3">
              <h2></h2>
              <p></p>
            </div>
          </div>

          <div className="but">
            <Link to={"/resume/"}>
              <img src={down} alt="down" />
            </Link>
            <Link to={"/about/"}>
              <img src={up} alt="down" />
            </Link>
          </div>
        </div>
        <div className="bot-mobleA">
          <Link to={"/resume/"}>
            <img src={down} alt="down" />
          </Link>
          <Link to={"/about/"}>
            <img src={up} alt="down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Portfolio;
