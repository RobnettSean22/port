import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import logo from "./my_logo.png";
// import {
//   FaArrowCircleLeft,
//   FaArrowCircleDown,
//   FaArrowCircleRight,
//   FaArrowCircleUp
// } from "react-icons/fa";
import down from "./Down.png";
import up from "./Up.png";
import "./Portfolio.scss";
import knmhome from "./KanjiNme-home.png";
import thisIsDev from "./this_is_dev.png";
import songStar from "./song_star.png";
import chat from "./socketio_chat.png";
import timer from "./js_timer.png";
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
            <div className="pro">
              <div className="slideshow">
                <div className="web-still-container">
                  <img src={thisIsDev} alt="" />
                </div>
              </div>

              <div className="this-is-dev">
                <h1>thisIS Devmountain</h1>
              </div>
              <p>dhfjkshdk</p>
            </div>
            <div className="pro">
              <div className="slideshow">
                <div className="web-still-container">
                  <img src={slideKNM} alt="home" />
                </div>
              </div>
              <div className="headingKNM">
                <h1>
                  Kanji <span>N</span> Me
                </h1>
              </div>

              <p>dfsdfsd</p>
            </div>
            <div className="pro">
              <div className="slideshow">
                <div className="web-still-container">
                  <img src={songStar} alt="" />
                </div>
              </div>
              <div className="song-star">
                <h1>songStar</h1>
              </div>
              <p>dsfsldjflsd</p>
            </div>
            <div className="pro">
              <div className="slideshow">
                <div className="web-still-container">
                  <img src={chat} alt="" />
                </div>
              </div>
              <div className="walk-talk">
                <h1>Totalk</h1>
              </div>
              <p>dfddfksldfls</p>
            </div>
            <div className="pro">
              <div className="slideshow">
                <div className="web-still-container">
                  <img src={timer} alt="" />
                </div>
              </div>
              <div className="timer-japan">
                <h1>JS Timer</h1>
              </div>
              <p>dfddfksldfls</p>
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
        <div className="bot-mobleP">
          <Link to={"/resume/"}>
            <img src={down} alt="down" />
          </Link>
          <Link to={"/about/"}>
            <img className="port-up" src={up} alt="down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Portfolio;
