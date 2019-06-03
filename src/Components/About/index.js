// Home.js
import React, { Component } from "react";
import sOC from '../../images/school-of-code-logo.webp';
import uniImage from "../../images/bcu.png";
import udacityImage from "../../images/udacity-logo.png";
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
                <div className={css.logoContainer}><img className={css.schoolOfCodeLogo} src={sOC} alt="School of Code"/></div>
                <div className={css.schoolOfCodeText}> 16 week bootcamp course, I was taught a web development full stack including HTML, CSS, Javascript, React and Node.js.<div className={css.projectManagement}> In addition I was taught important skills in project management and version control using Git, team work and pair programming.</div> I learnt the following languages:</div></div>
                <div className={css.skillsContainer}><Skills /></div>
              <div className={css.universityContainer}><div className={css.logoContainer}>
                <img className={css.universityImage} src={uniImage} alt="University"/></div>
                <div className={css.universityText}> Between September 2001 and June 2004, Graduated with a degree from Birmingham City University in BSc (Hons) Multimedia Technology with a Grade 2:1.
                </div>
                </div>
              <div className={css.udacityContainer}>
                <img className={css.udacityImage} src={udacityImage} alt="Udacity" />
                <div className={css.udacityText}>Completed on-line Udacity's Android Basics course. Created a number of Apps which are available to veiw on GitHub</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
