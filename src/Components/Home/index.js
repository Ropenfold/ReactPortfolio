import React from "react";
import css from "../Home/home.module.css";
import reactLogo from "../../images/react-logo.png";
import htmlLogo from "../../images/html-5-logo.png";
import cssLogo from "../../images/css-3-logo.png";
import JSLogo from "../../images/javascript-logo.png";
import NodeJS from "../../images/Node.js-logo.png";
import MongoDB from "../../images/MongoDB.png";
import Android from "../../images/android-logo.png";
import "../../../src/root.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className={css.totalContainer}>
          <div className={css.nameContainer}>
            <div className={css.iAm}>I'm Stuart. I build websites.</div>
          </div>
          <div className={css.iconsContainer}>
            <img className={css.reactLogo} src={reactLogo} alt="React" />
            <img className={css.htmlLogo} src={htmlLogo} alt="HTML" />
            <img className={css.cssLogo} src={cssLogo} alt="CSS" />
            <img className={css.jsLogo} src={JSLogo} alt="JavaScript" />
            <img className={css.nodejsLogo} src={NodeJS} alt="NodeJS" />
            <img className={css.mongoDB} src={MongoDB} alt="mongoDB" />
            <img className={css.androidLogo} src={Android} alt="androidLogo" />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
