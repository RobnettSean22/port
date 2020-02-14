import React from "react";
import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink/HeaderLink";
import logo from "./my_logo.png";
import skill from "./skills.png";

import "./Resume.scss";

const Resume = () => {
  return (
    <div>
      <div className="sec">
        <div className="cover">
          <div className="logo-place">
            <img className="lo-go" src={logo} alt="tl" />
            <HeaderLink />
          </div>
          <div className="title">
            <h1>Where I've Been</h1>
          </div>
          <div className="hold">
            <div className="left">
              <h1>Education</h1>
              <h2>Devmountain – Phoenix, December 2019 </h2>
              <ul>
                <li>Devmountain Graduate Certification</li>
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
              <h2>Devmountain</h2>
              <h3>Student/Intern</h3>
              <ul>
                <li>Daily afternoon projects</li>
                <li>Assesment builds and skills checks</li>
                <li>Create full functioning websites with full CRUD</li>
                <li>Four-person group project collaboration</li>
              </ul>
              <h2>WinBe - Saitama, December 2017 – September 2019</h2>
              <h3>Native English Teacher</h3>
              <ul>
                <li>
                  Teach children and adults English and about American Culture
                </li>
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
            <div className="portres">
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
              <h2>Devmountain</h2>
              <h3>Student/Intern</h3>
              <ul>
                <li>Daily afternoon projects</li>
                <li>Assesment builds and skills checks</li>
                <li>Create full functioning websites with full CRUD</li>
                <li>Four-person group project collaboration</li>
              </ul>
              <h2>WinBe - Saitama, December 2017 – September 2019</h2>
              <h3>Native English Teacher</h3>
              <ul>
                <li>
                  Teach children and adults English and about American Culture
                </li>
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
              <h2>Atlas Construction Supply - Denver, June 2015-August 2016</h2>
              <h3>Steal Ply Assembly and Restoration Lead</h3>
              <ul>
                <li>
                  Assembled, documented and loaded outgoing Steal Ply orders
                  under strict deadlines
                </li>
                <li>
                  Maintained cleanliness of supplies and steal yard to ensure
                  compliance expectations were met
                </li>
                <li>
                  Trained new hires on policies and steel yard procedures in
                  accordance with federal and state laws{" "}
                </li>
                <li>
                  Delivered and distributed construction supplies to various
                  organizations and customers
                </li>
              </ul>
              <h2>
                Active Transmission and Gear - Broomfeild, Summer 2011-2016
              </h2>
              <h3>Automotive Driver</h3>
              <ul>
                <li>
                  Assisted in vehicle performance to insure automobiles were
                  running appropriately
                </li>
                <li>
                  Delivered and distributed automotive parts and vehicles to
                  various clients within the state of Colorado and Wyoming
                </li>
              </ul>
              <h1>Accomplishments/Skills/Interests</h1>
              <ul>
                <li>Japanese Conversational (Have passed the N3)</li>
                <li>
                  Proficient with the following Adobe Products (Light room,
                  Photoshop, Premier, XD
                </li>
                <li>
                  Proficient with Microsoft Products (Word, PowerPoint, Excel,
                  Outlook)
                </li>
                <li>News Writing and Journalism</li>
                <li>National Photographer for Hastings College Track </li>
                <li>Student Athlete on scholarship for Football and Track</li>
                <li>Volunteer Track Coach for Jr Hastings Track program</li>
                <li>
                  Volunteer Football Coach for Broomfield and Hastings training
                  programs
                </li>
                <li>Five-time National Track Qualifier</li>
              </ul>
            </div>
          </div>

          <div className="but">
            <Link to={"/contact/"}>
              <button>Contact</button>
            </Link>
          </div>
        </div>
        <div className="bot-mobleR">
          <Link to={"/contact/"}>
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
