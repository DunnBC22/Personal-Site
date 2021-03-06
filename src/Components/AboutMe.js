/* This page talks about the non-technical side of me
as well as this website */

import React, { Component } from "react";
import myPicture from "../LinkedInPic.jpg";
import { Animated } from "react-animated-css";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPicture: myPicture,
      about: [
        {
          id: 0,
          header: "Personal Life",
          para:
            "I am always learning! Whether it is about something technical (like software development) or not (such as history), I am always interested."
        },
        {
          id: 1,
          header: "This Website",
          para:
            "I created this site to expand my knowledge of ReactJS and other relevant technologies as well as to have fun! In addition to ReactJS, this site utilizes React Router, Material UI, JavaScript (ES6), jQuery (for AJAX), and React Animated CSS."
        }
      ]
    };
  }

  render() {
    const aboutText = this.state.about.map(about => (
      <div key={about.id}>
        <h3>{about.header}</h3>
        <br />
        <p>{about.para}</p>
        <br />
      </div>
    ));

    return (
      <div className="app-body">
        <h1>About Me</h1>
        <br />
        <Animated
          animationIn="zoomIn"
          animationInDelay={250}
          animationInDuration={250}
        >
          <a href="http://linkedin.com/in/DunnBC22">
            <img
              src={myPicture}
              alt="LinkedIn Pic of Brian Dunn"
              className="about-me-picture"
            />
          </a>
        </Animated>
        <br />
        {aboutText}
      </div>
    );
  }
}
export default AboutMe;
