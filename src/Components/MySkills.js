/* This page talks about the technical knowledge and 
skills that I currently possess. */
import React, { Component } from "react";

class MySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "My skills are:",
      para:
        "Multiple skills listed above were used in the creation of this site. I look forward to furthering my knowledge of modern web development practices. I enjoy the challenge of learning a new language or technology. If you want to know more about how I could help your company, please call or email (listed in the footer).",
      skill: [
        { id: 0, name: "HTML5/CSS3" },
        { id: 1, name: "JavaScript (ES6)" },
        { id: 2, name: "AngularJS" },
        { id: 3, name: "SQL (SQL Server)" },
        { id: 4, name: "Java" },
        { id: 5, name: "Agile" },
        { id: 6, name: "Sass" },
        { id: 7, name: "Bootstrap 4" },
        { id: 8, name: "PHP" },
        { id: 9, name: "jQuery" },
        { id: 10, name: "ITIL" },
        { id: 11, name: "JSON" },
        { id: 12, name: "REST API" },
        { id: 13, name: "AJAX" },
        { id: 14, name: "XML" },
        { id: 15, name: "ReactJS" },
        { id: 16, name: "Responsive WD" },
        { id: 17, name: "Python" },
        { id: 18, name: "Linux CLI" },
        { id: 19, name: "C#" },
        { id: 20, name: "ASP.NET" },
        { id: 21, name: "Visual Basic" }
      ]
    };
  }

  render() {
    const skillList = this.state.skill.map(skill => (
      <div className="skill-list" key={skill.id}>
        <li>{skill.name}</li>
      </div>
    ));

    return (
      <div className="app-body">
        <h1>My Skills</h1>
        <br />
        <h5>{this.state.heading}</h5>
        <ul>{skillList}</ul>
        <br />
        <p>{this.state.para}</p>
      </div>
    );
  }
}
export default MySkills;
