import React from "react";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import FuturePlans from "./Components/FuturePlans";
import MySkills from "./Components/MySkills";
import Home from "./Components/Home";
import logo from "./BaseLogo.png";

//make sure to just use the BD logo as the Home link
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <Router>
            <div>
              <div className="header">
                <ul>
                  <li>
                    <NavLink to="/">
                      <img src={logo} className="app-logo" alt="BD Logo" />
                    </NavLink>
                  </li>
                  <div className="nav-bar">
                    <li>
                      <NavLink to="/AboutMe">About Me</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MySkills">My Skills</NavLink>
                    </li>
                    <li>
                      <NavLink to="/FuturePlans">Future Plans</NavLink>
                    </li>
                    <li>
                      <NavLink to="/ContactMe">Contact Me</NavLink>
                    </li>
                  </div>
                </ul>
              </div>

              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/AboutMe" component={AboutMe}></Route>
                <Route path="/MySkills" component={MySkills}></Route>
                <Route path="/FuturePlans" component={FuturePlans}></Route>
                <Route path="/ContactMe" component={ContactMe}></Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
