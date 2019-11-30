import React from "react";
import { Link } from "react-router-dom";
import logo from "./my_logo.png";
import skill from "./skills.png";
import down from "./Down.png";
import up from "./Up.png";
import "./Resume.scss";

const Resume = () => {
  return (
    <div>
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-go" src={logo} alt="tl" />
          </div>
          <div className="title">
            <h1>Resume</h1>
          </div>
          <div className="hold">
            <div className="left">
              <h1>Education</h1>
              <h2>Devmountain – Phoenix, December 2019 </h2>
              <ul>
                <li>Certification</li>
              </ul>
              <h2>Hastings College- Hastings, May 2016 </h2>
              <ul>
                <li>Bachelor of Arts-Psychology</li>
                <li>Minor-Visual Media</li>
              </ul>
              <h2>International TEFL/TESOL Training </h2>
              <ul>
                <li>ITTT Certification TEFL and TESOL, December 2016</li>
              </ul>
              <h1>Professional Experience</h1>
              <h2>WinBe - Saitama, December 2017 – September 2019</h2>
              <h3>Native English Teacher</h3>
              <ul>
                <li>Teach children and adults English and American Culture</li>
                <li>
                  Create lesson plans around class sizes and student
                  personalities
                </li>
                <li>Portrait Photographs for students “dreamsheets”</li>
                <li>
                  Communicate with manager and parents for student placement
                </li>
              </ul>
              <h2>
                Desert Schools Federal Credit Union - Phoenix, September 2016 –
                November 2017
              </h2>
              <h3>MAC Representative</h3>
              <ul>
                <li>
                  Answer questions and concerns from members and potential
                  members.
                </li>
                <li>
                  Make transfers and payments for members, process loan
                  advances, and quote loan payoffs.
                </li>
                <li>Cross-sell Desert Schools’ products and services.</li>
                <li>
                  Conduct research for members to perform corrections or explain
                  transaction on their accounts.
                </li>
              </ul>
            </div>
            <div className="skills">
              <img src={skill} alt="sk" />
            </div>
            <div className="right">
              <p>
                Photogenic Inc. August - September 16 Photographer and
                Editor/Sales Associate • Welcoming and directing guests through
                the line • Taking quality souvenir photographs for venue guests
                • Inviting customers to view their photos and complete sales of
                souvenir photographs Atlas Construction Supply June 2015-August
                2016 Steal Ply Assembly and Restoration Lead • Assembled,
                documented and loaded outgoing Steal Ply orders under strict
                deadlines • Maintained cleanliness of supplies and steal yard to
                ensure compliance expectations were met • Trained new hires on
                policies and steel yard procedures in accordance with federal
                and state laws • Delivered and distributed construction supplies
                to various organizations and customers Active Transmission and
                Gear Summer 2011-2016 Automotive Driver • Assisted in vehicle
                performance to insure automobiles were running appropriately •
                Delivered and distributed automotive parts and vehicles to
                various clients within the state of Colorado and Wyoming
              </p>
              <h1>Accomplishments/Skills/Interests</h1>
              <p>
                • National Photographer for Hastings College Track • Experience
                with News Writing and Journalism • Proficient with the following
                Adobe Products (Light room, Photoshop, Premier, XD) • Proficient
                with Microsoft Products (Word, PowerPoint, Excel, Outlook) •
                Student Athlete on scholarship for Football and Track • Voted
                Capitan by both track and football teams • Volunteer Track Coach
                for Jr Hastings Track program • Volunteer Football Coach for
                Broomfield and Hastings training programs • Five-time National
                Track Qualifier
              </p>
            </div>
          </div>

          <div className="but">
            <Link to={"/contact/"}>
              <img src={down} alt="down" />
            </Link>
            <Link to={"/portfolio/"}>
              <img src={up} alt="down" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
