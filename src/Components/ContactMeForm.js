/* This is the Contact Me Form that gets 
inserted into the Contact Me page/component */

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/
);

const phoneNumRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class ContactMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      company: null,
      email: null,
      phoneNumber: null,
      description: null,
      formErrors: {
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        description: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      /*      console.log(
         `--SUBMITTING-- 
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        company: ${this.state.company}
        email: ${this.state.email}
        phoneNumber: ${this.state.phoneNumber}
        description: ${this.state.description}` 
      );*/
      alert(
        "Unfortunately, I have not yet set up the server side of this page. Feel free to email or call me. You can  connect with me on LinkedIn as well!"
      );
    } else {
      alert(
        "All fields are required. Please make sure that there are no errors in your input."
      );
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "min. 3 chars required" : "";
        break;
      case "lastName":
        formErrors.lastName = value.length < 3 ? "min. 3 chars required" : "";
        break;
      case "company":
        formErrors.company = value.length < 3 ? "min. 3 chars required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email";
        break;
      case "phoneNumber":
        formErrors.phoneNumber = phoneNumRegex.test(value)
          ? ""
          : "invalid phone number";
        break;
      case "description":
        formErrors.description = value.length < 2 ? "*required field" : "";
        break;
      default:
        break;
    }
  };

  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div className="newContactForm">
          <fieldset>
            <form onSubmit={this.handleSubmit} noValidate>
              <div>
                <TextField
                  autoFocus
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.firstName}
                  name="firstName"
                  className="cmf-input"
                  label="First Name"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                />
                <TextField
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.lastName}
                  name="lastName"
                  className="cmf-input"
                  label="Last Name"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                />
                <TextField
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.company}
                  name="company"
                  className="cmf-input"
                  label="Company"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                />
                <TextField
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.email}
                  name="email"
                  className="cmf-input"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                />
                <TextField
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.phoneNumber}
                  name="phoneNumber"
                  className="cmf-input"
                  label="Phone Number"
                  margin="normal"
                  variant="outlined"
                  style={{ margin: 8 }}
                />
                <TextField
                  noValidate
                  onChange={this.handleChange}
                  helperText={formErrors.description}
                  name="description"
                  className="cmf-input"
                  label="Description"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="3"
                  style={{ margin: 8 }}
                />

                <div className="center-submit">
                  <button
                    type="submit"
                    value="Submit"
                    className="submit-button"
                  >
                    Submit
                  </button>
                  <button type="reset" value="Reset" className="submit-button">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </fieldset>
        </div>
      </>
    );
  }
}
export default ContactMeForm;
