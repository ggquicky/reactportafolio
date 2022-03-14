import profileP from "./profile.jpeg";
import "./about.css";

import React, { Component } from "react";

export default class about extends Component {
  render() {
    let title = "Hi, I´m Erick Narvaez";
    let titleArray = title.split("");
    let subTitle ="a starting web developer";
    let subTitleArray = subTitle.split("");

    return (
      <div className="sectionAbout" id="sectionAbout">
        <div className="aboutHeader">
          <img className="profilePic" src={profileP} alt="profile" />
          <div>
          <h1>
            {titleArray.map(function (value, index) {
              if(value == " "){
                return <span className="letterAnimation" key={index}>&nbsp;</span>;
              }else {
                return <span className="letterAnimation" key={index}> {value}</span>;
              }
              
            })}
          </h1>
          <h2>{subTitleArray.map(function (value, index) {
              if(value == " "){
                return <span className="letterAnimation" key={index}>&nbsp;</span>;
              }else {
                return <span className="letterAnimation" key={index}> {value}</span>;
              }
              
            })}</h2>
          </div>
    
        </div>

        <div >
        <p className="aboutText">
            I´m starting a new journey in the web development career. This new
            journey has a lot of challeges. All you need is creativity and some
            code to made excellent web pages. My first goal is being a Frontend
            Developer.
          </p>
        </div>
      </div>
    );
  }
}
