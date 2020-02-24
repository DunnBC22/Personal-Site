/* This is the exact same page as the About Me page. 
In fact, this page just redirects to the AboutMe component. */

import React, { Component } from "react";
import AboutMe from "./AboutMe";

class Home extends Component {
  render() {
    return <AboutMe />;
  }
}
export default Home;
