import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactPhoneNumber: "262.923.0473",
      contactEmail: "DunnBC22@gmail.com",
      emailSubject: "Contact From First React App"
    };
  }

  render() {
    return (
      <div className="footer">
        <a
          href={`mailto:${this.state.contactEmail}?subject='${this.state.emailSubject}'`}
        >
          {this.state.contactEmail}
        </a>
        <div className="footer-right">
          <a href={`tel:${this.state.contactPhoneNumber}`}>
            {this.state.contactPhoneNumber}
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
