import React, { Component } from "react";
import "./Contactme.css"


export default class contactMe extends Component {
  render() {
    return (
      <div id="sectionContactme" className="sectionContactme">
        <div className="contact_header">
          <h1>Let's work together!!</h1>
          <h3>How do you like pizza?</h3>
        </div>
        <div className="contact-link">
          <a
            rel="nofollow noopener noreferrer"
            id="profile-link"
            href="https://github.com/ggquicky"
            target="_blank"
          >
            <i className="fab fa-github"></i>Github
          </a>
          <a
            rel="nofollow noopener noreferrer"
            href="https://twitter.com/Enarvaezr"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>Twitter
          </a>
          <a
            rel="nofollow noopener noreferrer"
            href="mailto:ggquicky@gmail.com"
            target="_blank"
          >
            <i className="fas fa-envelope-open-text"></i>Send a Mail
          </a>
        </div>
        <div className="counter">
          <h2>Website visitors:</h2>
          <h3 className="website-counter">0</h3>
          <button id="reset">Reset</button>
        </div>
      </div>
    );
  }
}
