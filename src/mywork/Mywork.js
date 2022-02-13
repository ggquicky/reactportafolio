import React, { Component } from "react";

export default class Mywork extends Component {
  render() {
    return (
      <div>
        <h1>These are some of my projects</h1>
        <div className="projects-grid">
          <a
            href="https://codepen.io/ggquicky/pen/MWEazqZ"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://raw.githubusercontent.com/ggquicky/webportafolio/main/Media%20Files/tributepage.png"
              alt="project"
            />
            <p className="project-title">
              <span class="code">&lt;</span>
              Tribute Page
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/ggquicky/pen/dyVGagQ"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://raw.githubusercontent.com/ggquicky/webportafolio/main/Media%20Files/surveyform.png"
              alt="project"
            />
            <p className="project-title">
              <span class="code">&lt;</span>
              Survey Form
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/ggquicky/pen/bGoYXKa"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://raw.githubusercontent.com/ggquicky/webportafolio/main/Media%20Files/productlanding.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Product Landing
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
          <a
            href="https://codepen.io/ggquicky/pen/gOGvJJe"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="project project-tile"
          >
            <img
              className="project-image"
              src="https://raw.githubusercontent.com/ggquicky/webportafolio/main/Media%20Files/technicaldoc.png"
              alt="project"
            />
            <p className="project-title">
              <span className="code">&lt;</span>
              Technical Document
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </div>
      </div>
    );
  }
}
