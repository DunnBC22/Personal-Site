/* This page has the contact me form and the Linkedin 
Logo leading to my LinkedIn profile. */

import React from "react";
import ContactMeForm from "./ContactMeForm";
import linkedinlogo from "../LI-Logo.png";

class ContactMe extends React.Component {
  render() {
    return (
      <div className="app-body">
        <h1>Contact Me</h1>
        <br />
        <p>
          If you would like to learn more about me and what I can do for your
          company, please contact me:
        </p>
        <ContactMeForm />
        <br />
        <a className="linkedin-logo" href="http://linkedin.com/in/DunnBC22">
          <img
            src={linkedinlogo}
            alt="LinkedIn Logo"
            className="linkedin-logo"
          />
        </a>
      </div>
    );
  }
}
export default ContactMe;
