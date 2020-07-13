import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import logo from "./my_logo.png";

import "./Portfolio.scss";
import knmhome from "./kanjinme_FW.jpg";
import thisIsDev from "./this_is_dev_FW.jpg";
import songStar from "./song_star_FW.jpg";
import chat from "./socketio_chat.png";
import timer from "./js_timer_FW.jpg";
import Xchange from "./xchangeW.jpg";
import github from "./github.png";
import cam from "./cam-screenshot.png";
import mail from "./emails_sort.png";
import axios from "axios";
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      slideKNM: [knmhome],
      AZImage: [],
      TIDp: false,
      KNMp: false,
      SSp: false,
      SCp: false,
      CDTp: false,
      xchange: false,
      camMon: false,
      dateRange: false
    };
    this.toResume = this.toResume.bind(this);
    this.fromPortfolio = this.fromPortfolio.bind(this);
  }

  componentDidMount() {
    this.azStorageCall();
  }

  toResume() {
    this.props.history.push("/resume");
  }
  fromPortfolio() {
    this.props.history.push("/");
  }
  azStorageCall() {
    axios
      .get(
        "https://revision-images.s3-ap-northeast-1.amazonaws.com/KanjiNme-home.png"
      )
      .then(response => {
        this.setState({
          AZImage: response.data
        });
      });
  }

  TIDpOn() {
    this.setState({
      TIDp: true
    });
  }
  xchangeOn() {
    this.setState({
      xchange: true
    });
  }
  dateRangeOn() {
    this.setState({
      dateRange: true
    });
  }
  camMonOn() {
    this.setState({
      camMon: true
    });
  }
  KNMpOn() {
    this.setState({
      KNMp: true
    });
  }
  SSpOn() {
    this.setState({
      SSp: true
    });
  }
  SCpOn() {
    this.setState({
      SCp: true
    });
  }
  CDTpOn() {
    this.setState({
      CDTp: true
    });
  }
  // off switch *****************************************************
  TIDpOff() {
    this.setState({
      TIDp: false
    });
  }
  KNMpOff() {
    this.setState({
      KNMp: false
    });
  }
  SSpOff() {
    this.setState({
      SSp: false
    });
  }
  SCpOff() {
    this.setState({
      SCp: false
    });
  }
  CDTpOff() {
    this.setState({
      CDTp: false
    });
  }
  xchangeOff() {
    this.setState({
      xchange: false
    });
  }
  camMonOff() {
    this.setState({
      camMon: false
    });
  }
  dateRangeOff() {
    this.setState({
      dateRange: false
    });
  }

  render() {
    const {
      slideKNM,
      TIDp,
      KNMp,
      SSp,
      SCp,
      CDTp,
      AZImage,
      xchange,
      dateRange,
      camMon
    } = this.state;
    console.log(AZImage);
    return (
      <div className='sec'>
        <div className='cover'>
          <div className='logo-place'>
            <img
              onClick={this.fromPortfolio}
              className='lo-go'
              src={logo}
              alt='tl'
            />
            <HeaderLink />
          </div>
          <div className='title'>
            <h1>Projects</h1>
          </div>
          <div className='projects'>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={Xchange} alt='' />
                </div>
              </div>

              <div className='xchange'>
                <h1>
                  <a
                    className='site-link'
                    href='https://cchange.netlify.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Xchange
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/currency-exchange'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-xchange'>
                {" "}
                <p className={xchange ? "hidden" : "more"}>
                  Technologies: React, javascript, Node.js, Chartjs
                  <h5 onClick={e => this.xchangeOn()}>More Info</h5>
                </p>
                <p className={xchange ? "show" : "hidden"}>
                  Users can enter an amount into the input field and find the
                  exchanged amount based on the spcified countriers currency.
                  Rates per dollar are displayed as well as the when the rates
                  were last updated.
                  <h5
                    onClick={e => this.xchangeOff()}
                    className={xchange ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={mail} alt='' />
                </div>
              </div>
              <div className='email-archive'>
                <h1>
                  <a
                    className='archive-link'
                    href='https://testdaterang.netlify.app'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Date Range{" "}
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/email-archives'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-email-archive'>
                {" "}
                <p className={dateRange ? "hidden" : "more"}>
                  Technologies: React, Daterange Picker, Javascript, SpeakeasyJS
                  <h5 onClick={e => this.dateRangeOn()}> More Info</h5>
                </p>
                <p className={dateRange ? "show" : "hidden"}>
                  This security email archive is an application (challenge) that
                  uses React, Javascript, and Date Picker. The user can select a
                  date range, click on any of the emails that were where sent or
                  received within the specified dates. The user is also able to
                  cycle through the emails that came up with in the search and
                  view the contents of several emails at the same time.
                  <h5
                    onClick={e => this.dateRangeOff()}
                    className={dateRange ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={cam} alt='' />
                </div>
              </div>
              <div className='cam-mon'>
                <h1>
                  <a
                    className='cam-link'
                    href='http://totalk.online/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Cam Mon{" "}
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/Front-End-Test'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-camermonitor'>
                {" "}
                <p className={camMon ? "hidden" : "more"}>
                  Technologies: React, Javascript, SCSS
                  <h5 onClick={e => this.camMonOn()}> More Info</h5>
                </p>
                <p className={camMon ? "show" : "hidden"}>
                  Cam Mon is a simple front end project that implements sorting,
                  filtering and css gridind skills.
                  <h5
                    onClick={e => this.camMonOff()}
                    className={camMon ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={songStar} alt='' />
                </div>
              </div>
              <div className='song-star'>
                <h1>
                  <a
                    className='songstar-link'
                    href='https://songstar.me'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Song Star
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/songstar'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-songStar'>
                {" "}
                <p className={SSp ? "hidden" : "more"}>
                  Technologies: React, nodjs, react-redux, bcyrpt, express,
                  javascript, postgresQL
                  <h5 onClick={e => this.SSpOn()}> More Info</h5>
                </p>
                <p className={SSp ? "show" : "hidden"}>
                  SongStar is a simple web app that allows uesers to add songs
                  to any number of playlist that can be created or deleted. The
                  user can choose from a list of songs and if a song is not
                  availble in that list, they can add their song of choice to
                  the ALL Songs section.
                  <h5
                    onClick={e => this.SSpOff()}
                    className={SSp ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={thisIsDev} alt='' />
                </div>
              </div>

              <div className='this-is-dev'>
                <h1>
                  <a
                    className='site-link'
                    href='https://thisisdevmountain.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    devmTn
                  </a>
                  <a
                    href='https://github.com/C-E-Campbell/groupProjectWPX15'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-thisisdev'>
                {" "}
                <p className={TIDp ? "hidden" : "more"}>
                  Technologies: React, javascript, nodejs, chart.js, socket.io
                  express, postgresQL, bcyrpt, express-fileupload
                  <h5 onClick={e => this.TIDpOn()}>More Info</h5>
                </p>
                <p className={TIDp ? "show" : "hidden"}>
                  A web application created by Devmountain developers for
                  Devmountain developers. This site allows Devmountain devs from
                  past present and future to create a profile and show case any
                  project they have built , and share it with the rest of the
                  community. If it is hosted, using I frame, users can interact
                  and comment on fully functioning websites on
                  thisIsDevmountain. They are also capable of viewing all apps
                  created by an individual by viewing that users profile.
                  thisIsDvemountain was built with the intension to motivate
                  those beginning at Devmountain and give all Devmountain
                  developers a safe place to grow and learn.
                  <h5
                    onClick={e => this.TIDpOff()}
                    className={TIDp ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={slideKNM} alt='home' />
                </div>
              </div>
              <div className='headingKNM'>
                <h1>
                  <a
                    className='kajinme'
                    href='https://kanjin.me'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Kanji <span>N</span> Me
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/before-thegame'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>

              <div className='description-for-kanjinme'>
                {" "}
                <p className={KNMp ? "hidden" : "more"}>
                  Technologies: nodejs, React, react-redux, bcyrpt, express,
                  javascript, postgresQL, sessions
                  <h5 onClick={e => this.KNMpOn()}>More Info</h5>
                </p>
                <p className={KNMp ? "show" : "hidden"}>
                  Kanji N Me's purpose is to help individuals that are learning
                  Kanji (Chinese characters) in relation to the Japanese
                  language, to add the necessary kanji of their choosing to
                  their profile page. They are able to review and practice the
                  Kanji with in the selected folders which the have created and
                  named with an interactive quiz game.
                  <h5
                    onClick={e => this.KNMpOff()}
                    className={KNMp ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>

            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={chat} alt='' />
                </div>
              </div>
              <div className='walk-talk'>
                <h1>
                  Totalk
                  <a
                    href='https://github.com/RobnettSean22/practicingsocketio'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-totalk'>
                {" "}
                <p className={SCp ? "hidden" : "more"}>
                  Technologies: socket.io, HtML5, SCSS, vanillaJS
                  <h5 onClick={e => this.SCpOn()}>More Info</h5>
                </p>
                <p className={SCp ? "show" : "hidden"}>
                  ToTalk is a live chat app that uses socket.io technology.
                  Create a user name and speak to anyone that is in the chat.
                  Futuer version will include chatrooms that can be created so
                  users can choose a topic or join a room and talk to others
                  that are interrested in the same topic.
                  <h5
                    onClick={e => this.SCpOff()}
                    className={SCp ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h5>
                </p>
              </div>
            </div>
            <div className='pro'>
              <div className='slideshow'>
                <div className='web-still-container'>
                  <img src={timer} alt='' />
                </div>
              </div>
              <div className='timer-japan'>
                <h1>
                  <a
                    className='timer-link'
                    href='http://countidown.live/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    JS Timer
                  </a>
                  <a
                    href='https://github.com/RobnettSean22/countdown'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img className='giti' src={github} alt='' />
                  </a>
                </h1>
              </div>
              <div className='description-for-countdown-timer'>
                {" "}
                <p className={CDTp ? "hidden" : "more"}>
                  Technologies: vanillaJS, javascript, HTML5, SCSS
                  <h5 onClick={e => this.CDTpOn()}>More Info</h5>
                </p>
                <p className={CDTp ? "show" : "hidden"}>
                  A count down timer I created to practice JavaScript and
                  vanillaJS.
                  <h3
                    onClick={e => this.CDTpOff()}
                    className={CDTp ? "less" : "hidden"}
                  >
                    {" "}
                    Less Info
                  </h3>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bot-mobleP'>
          <button onClick={this.toResume}>Resume</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Portfolio);
