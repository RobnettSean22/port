import React from "react";
import logo from "./my_logo.png";
import "./About.scss";

import HeaderLink from "../HeaderLink/HeaderLink";
import { Link, withRouter } from "react-router-dom";

const About = props => {
  function toPortfolio() {
    props.history.push("/portfolio");
  }
  function fromAbout() {
    props.history.push("/");
  }
  return (
    <div className="sec">
      <div className="cover">
        <div className="logo-place">
          <img onClick={fromAbout} className="lo-go" src={logo} alt="tl" />

          <HeaderLink />
        </div>
        <div className="title">
          <h1>Who am I?</h1>
        </div>
        <div className=" about">
          <p>
            I love to create, break, and rebuild. I find a joy in learning from
            those around no matter the age or profesional field. I have traveled
            to nearly all 50 states and have lived in four of them. Whether it
            be to a new house, city, state or country, I make sure to leave and
            bring back a souvenir. These “souvenir’s, are irreplaceable when it
            comes to my growth as a professional and human being.{" "}
          </p>
          <p>
            I was born and raised in Colorado and it was there I learned
            creative writing and lyricism from Kanessa Io and Mrs. Ramesy. For
            that I thank them. While living in Nebraska I developed a love of
            photography and the creative aspects behind it such as angles,
            shadows, lights and reflections from Matt … and Brett Erickson and
            for that I thank them. For the past two years I have been living in
            Japan, and I have experienced and learned so much about Japanese
            culture, American culture, Japanese people, the language and myself.
          </p>
          <p>
            In Japan I was able to find the missing link to tie my other three
            passions together thanks to several individuals that I met there. In
            fact they lead me to my programing journey at Devmountain. Here I
            have met a new team of individuals that have pushed me to new
            limits. Build, create, learn, break, rebuild, and share. Everything
            that I have accomplished I have worked hard for, but if there is one
            thing that my time in athletics has taught me, is the at my teams
            are the engine that has created the opportunities or my success. The
            recognition may go to me, but the credit goes to my them. Who am I?
            I am my team and my team is me.
          </p>
        </div>
      </div>
      <div className="bot-mobleA">
        <button onClick={toPortfolio}>Portfolio</button>
      </div>
    </div>
  );
};

export default withRouter(About);
