import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { Link } from "react-router-dom";
import logo from "./my_logo.png";
import fb from "./facebook.png";
import gh from "./github.png";
import ig from "./insta.png";
import ln from "./linkedin.png";
import phone from "./phone.png";
import line from "./line.png";
import email from "./mail.png";
import down from "./Down.png";
import up from "./Up.png";

import "./Contact.scss";
const Contact = () => {
  return (
    <div className="sec">
      <div className="cover">
        <div className="logo-place">
          <img className="lo-go" src={logo} alt="tl" />
          <HeaderLink />
        </div>
        <div className="title">
          <h1>Get in Touch</h1>
        </div>
        <div className="spred">
          <div className="contact-contain">
            <div className="phone">
              <img src={phone} alt="phone" />
              <h1>+ 81 (080)-3939-3032</h1>
            </div>
            <div className="line">
              <img src={line} alt="line" />
              <h1>Soul(ショニト2)</h1>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <h1>Robnettsean22@gmail.com</h1>
            </div>
            <div className="icons">
              <a
                className="facebook"
                target="_blank"
                href="https://www.facebook.com/sean.robnett1"
              >
                <img className="facebook" src={fb} alt="facebook" />
              </a>
              <a
                className="insta"
                target="_blank"
                href="https://www.instagram.com/auniversoullion/?hl=ja"
              >
                <img className="insta" src={ig} alt="insta" />
              </a>
              <a
                className="github"
                target="_blank"
                href="https://github.com/RobnettSean22"
              >
                <img className="github" src={gh} alt="github" />
              </a>
              <a
                className="linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/sean-robnett-softwareengineer/"
              >
                <img className="linkedin" src={ln} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="or">
            <h1 className="option">OR</h1>
          </div>
          <div className="message-contain">
            <div className="name">
              <input placeholder="Name" />
            </div>
            <div className="email-me">
              <input placeholder="Email" />
            </div>
            <div className="message">
              <textarea placeholder="Send me a Message :)" />
            </div>
          </div>
        </div>

        <div className="but">
          <Link to={"/about/"}>
            <img src={down} alt="down" />
          </Link>
          <Link to={"/resume/"}>
            <img src={up} alt="down" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
