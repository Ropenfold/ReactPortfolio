import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar navbar-expand-lg navbar-light bg-light">
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
          <hr />
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
