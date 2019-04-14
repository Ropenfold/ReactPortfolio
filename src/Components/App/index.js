import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import css from '../App/app.module.css'
import twitterBird from '../../images/twitter-circle.png';
import githubLogo from '../../images/github-logo.png';
import linkedInLogo from '../../images/LinkedInlogo.png';
import facebookLogo from '../../images/facebook.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={css.navBar}>
            <div className={css.naviComponents}>
            <Link to={"/"} className="nav-link">
              Home
            </Link>

            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>

            <Link to={"/about"} className="nav-link">
              About
            </Link>
            </div>
            <div className={css.contactIconsMenu}>
              <img className={css.twitterIcon} src={twitterBird} alt="twitter-bird"/>
              <img className={css.gitHubIcon} src={githubLogo} alt="github-logo"/>
              <img className={css.linkedInIcon} src={linkedInLogo} alt="linkedIn-logo"/>
              <img className={css.facebookIcon} src={facebookLogo} alt="facebook-logo"/>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
