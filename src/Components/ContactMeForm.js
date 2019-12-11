/* This is the Contact Me Form that gets 
inserted into the Contact Me page/component */

import React, { Component } from "react";

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
      console.log(
        `--SUBMITTING-- 
        firstName: ${this.state.firstName}
        lastName: ${this.state.lastName}
        company: ${this.state.company}
        email: ${this.state.email}
        phoneNumber: ${this.state.phoneNumber}
        description: ${this.state.description}`
      );
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

    /*     console.log("Name: ", name);
    console.log("Value: ", value); */

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
        formErrors.description = value.length < 1 ? "*required field" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <>
        <div className="contact-me-form">
          <br />
          <form onSubmit={this.handleSubmit} noValidate>
            <fieldset>
              <label className="cmf-label" htmlFor="firstName">
                First Name:
              </label>
              <input
                className="cmf-input"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
                placeholder="First Name"
              ></input>
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
              <br />
              <label className="cmf-label" htmlFor="lastName">
                Last Name:
              </label>
              <input
                className="cmf-input"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
                placeholder="Last Name"
              ></input>
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
              <br />
              <label className="cmf-label" htmlFor="company">
                Company:
              </label>
              <input
                className="cmf-input"
                type="text"
                name="company"
                noValidate
                onChange={this.handleChange}
                placeholder="Company Name"
              ></input>
              {formErrors.company.length > 0 && (
                <span className="errorMessage">{formErrors.company}</span>
              )}
              <br />
              <label className="cmf-label" htmlFor="email">
                Email:
              </label>
              <input
                className="cmf-input"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
                placeholder="Email Address"
              ></input>
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              <br />
              <label className="cmf-label" htmlFor="phoneNumber">
                Phone Number:
              </label>
              <input
                className="cmf-input"
                type="tel"
                name="phoneNumber"
                noValidate
                onChange={this.handleChange}
                placeholder="Phone Number"
              ></input>
              {formErrors.phoneNumber.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNumber}</span>
              )}
              <br />
              <label className="cmf-label" htmlFor="description">
                Description:
              </label>
              <textarea
                className="cmf-input"
                type="textarea"
                name="description"
                noValidate
                rows="3"
                columns="24"
                onChange={this.handleChange}
                placeholder="Description"
              ></textarea>
              {formErrors.description.length > 0 && (
                <span className="errorMessage">{formErrors.description}</span>
              )}
            </fieldset>
            <div className="center-submit">
              <input
                type="submit"
                value="Submit"
                className="submit-button"
              ></input>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default ContactMeForm;
