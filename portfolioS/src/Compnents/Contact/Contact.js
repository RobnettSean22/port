import React, { Component } from "react";
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      nameInp: "",
      emailAdress: "",
      messageInp: ""
    };
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

  render() {
    const { nameInp, emailAdress, messageInp } = this.state;
    return (
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-gos" src={logo} alt="tl" />
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
                    value={nameInp}
                    onChange={e => this.setState({ nameInp: e.target.value })}
                    placeholder="Name"
                  />
                </div>
                <div className="email-me">
                  <input
                    type="email"
                    name="email"
                    value={emailAdress}
                    onChange={e =>
                      this.setState({ emailAdress: e.target.value })
                    }
                    placeholder="Email"
                  ></input>
                </div>

                <div className="message">
                  <textarea
                    name="message"
                    value={messageInp}
                    onChange={e =>
                      this.setState({ messageInp: e.target.value })
                    }
                    placeholder="Send me a Message :)"
                  />
                </div>
                <div className="butbut">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="butter">
            <Link to={"/about/"}>
              <img src={down} alt="down" />
            </Link>
            <Link to={"/resume/"}>
              <img src={up} alt="down" />
            </Link>
          </div>
        </div>
        <div className="spine">
          <Link to={"/about/"}>
            <img src={down} alt="down" />
          </Link>
          <Link to={"/resume/"}>
            <img className="upC" src={up} alt="up" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
