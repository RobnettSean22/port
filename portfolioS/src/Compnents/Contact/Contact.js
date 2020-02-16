import React, { Component } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";
import { withRouter } from "react-router-dom";
import logo from "./my_logo.png";
import fb from "./facebook.png";
import gh from "./github.png";
import ghc from "./github_copy.png";
import ig from "./insta.png";
import ln from "./linkedin.png";
import phone from "./phone.png";
import line from "./line.png";
import emailcon from "./mail.png";

import "./Contact.scss";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.toAbout = this.toAbout.bind(this);
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toAbout() {
    this.props.history.push("/about");
  }

  render() {
    const { name, email, message } = this.state;
    console.log(this.props);
    return (
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-gos" src={logo} alt="tl" />
            <HeaderLink />
          </div>

          <div className="contact-title">
            <h1>Get in Touch</h1>
          </div>
          <div className="mobile-contact">
            <div>
              <h1>Phone</h1>
              <h2>+ 81 080-3939-3032</h2>
            </div>

            <div>
              <h1>Line</h1>
              <h2>Soul(ショニト2)</h2>
            </div>

            <div>
              <h1>Email</h1>
              <h2>robnettsean22@gmail.com</h2>
            </div>

            <div className="mobile-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sean.robnett1"
              >
                <img className="facebook" src={fb} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/auniversoullion/?hl=ja"
              >
                <img className="instagram" src={ig} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/RobnettSean22"
              >
                <img className="github" src={ghc} alt="" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sean-robnett-softwareengineer/"
              >
                <img className="linkedin" src={ln} alt="" />
              </a>
            </div>
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
                <img src={emailcon} alt="email" />
                <h1>robnettsean22@gmail.com</h1>
              </div>
              <div className="icons">
                <a
                  className="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sean.robnett1"
                >
                  <img className="facebook" src={fb} alt="facebook" />
                </a>
                <a
                  className="insta"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/auniversoullion/?hl=ja"
                >
                  <img className="insta" src={ig} alt="insta" />
                </a>
                <a
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/RobnettSean22"
                >
                  <img className="github" src={gh} alt="github" />
                </a>
                <a
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <form onSubmit={this.handleSubmit}>
                <div className="name">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name"
                  />
                </div>
                <div className="email-me">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  ></input>
                </div>

                <div className="message">
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    placeholder="Send me a Message :)"
                  />
                </div>
                <div className="butbut">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="spine">
          <button onClick={this.toAbout}>About</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
