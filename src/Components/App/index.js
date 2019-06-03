import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import css from "../App/app.module.css";
import twitterBird from "../../images/twitter-circle.png";
import githubLogo from "../../images/github-logo.png";
import linkedInLogo from "../../images/LinkedInlogo.png";
import "../../../src/root.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={css.navBar}>
            <div className={css.naviComponents}>
              <Link
                style={{ textDecoration: "none" }}
                to={"/"}
                className={css.navLink}
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/about"}
                className={css.navLink}
              >
                About
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/projects"}
                className={css.navLink}
              >
                Projects
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={"/contact"}
                className={css.navLink}
              >
                Contact
              </Link>
            </div>
            <div className={css.contactIconsMenu}>
              <a href="https://twitter.com/ropenfold">
                <img
                  className={css.twitterIcon}
                  src={twitterBird}
                  alt="twitter-bird"
                />
              </a>
              <a href="https://github.com/Ropenfold">
                <img
                  className={css.gitHubIcon}
                  src={githubLogo}
                  alt="github-logo"
                />
              </a>
              <a href="https://www.linkedin.com/in/stuart-roper-122694a0/">
                <img
                  className={css.linkedInIcon}
                  src={linkedInLogo}
                  alt="linkedIn-logo"
                />
              </a>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
