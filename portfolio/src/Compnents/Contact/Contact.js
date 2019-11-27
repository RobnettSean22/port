import React from "react";
import logo from "./my_logo.png";
import fb from "./facebook.png";
import gh from "./github.png";
import ig from "./insta.png";
import ln from "./linkedin.png";
import phone from "./phone.png";
import line from "./line.png";
import email from "./mail.png";

import "./Contact.scss";
function Contact() {
  return (
    <div className="sec">
      <div className="cover">
        <div className="logo-place">
          <img className="lo-go" src={logo} alt="tl" />
        </div>
        <div className="title">
          <h1>Get in Touch</h1>
        </div>
        <div className="spred">
          <div className="contact-contain">
            <div className="phone">
              <img src={phone} alt="phone" />
              <h1>+ 91 (080)-3939-3032</h1>
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
              <img className="facebook" src={fb} alt="facebook" />
              <img className="insta" src={ig} alt="insta" />
              <img className="github" src={gh} alt="github" />
              <img className="linkedin" src={ln} alt="linkedin" />
            </div>
          </div>
          <div className="or">
            <h1 className="option">OR</h1>
          </div>
          <div className="message-contain">
            <div className="name">
              <input />
            </div>
            <div className="email-me">
              <input />
            </div>
            <div className="message">
              <textarea />
            </div>
          </div>
        </div>

        <div className="but"></div>
      </div>
    </div>
  );
}

export default Contact;
