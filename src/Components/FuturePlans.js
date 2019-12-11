/* This page talks about my future plans. */

import React, { Component } from "react";

class FuturePlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          id: 0,
          heading: "Skills Development",
          para: `I will finish learning ReactJS and Redux. After that, I intend on continuing to learn more about different and relevant topics within technology during my free time.`
        },
        {
          id: 1,
          heading: "Career Aspirations",
          para:
            "I am seeking an entry level software developer role with a bold and forward looking company. Additionally, I am looking to become the subject matter expert in my career field."
        },
        {
          id: 2,
          heading: "Personal Plans",
          para:
            "Outside of work, I want to start volunteering and continue traveling and experiencing concerts. One cause that is near and dear to my heart is behavioral and mental health awareness. It would be nice to become more involved in that cause."
        }
      ]
    };
  }

  render() {
    const PlansText = this.state.plans.map(plans => (
      <div key={plans.id}>
        <h3>{plans.heading}</h3>
        <br />
        <p>{plans.para}</p>
        <br />
      </div>
    ));

    return (
      <div className="app-body">
        <h1>Future Plans</h1>
        <br />
        {PlansText}
      </div>
    );
  }
}
export default FuturePlans;
