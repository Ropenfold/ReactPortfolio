// Home.js
import React, { Component } from "react";
import SOC from '../../images/school-of-code-logo.webp';
import Skills from "../Skills";
import css from "../About/about.module.css";

class About extends Component {
  render() {
    return (
      <>
        <div className={css.totalContainer}>
          <div className={css.firstContainer}>
            <div className={css.name}>Stuart Roper</div>
            <div className={css.infoContainer}>
              <div className={css.schoolOfCodeContainer}>
                <img className={css.schoolOfCodeLogo} src={SOC} alt="School of Code"/>
                <div className={css.schoolOfCodeText}></div>
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
