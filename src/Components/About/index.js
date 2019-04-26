// Home.js
import React, { Component } from "react";
import css from "../About/about.module.css";

class About extends Component {
  render() {
    return (
      <>
        <div className={css.totalContainer}>
          <div className={css.firstContainer}>
            <div className={css.name}>Stuart Roper</div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
