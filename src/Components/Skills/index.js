import React from 'react';
import reactLogo from "../../images/react-logo.png";
import htmlLogo from "../../images/html-5-logo.png";
import cssLogo from "../../images/css-3-logo.png";
import JSLogo from "../../images/javascript-logo.png";
import NodeJS from "../../images/Node.js-logo.png";
import MongoDB from "../../images/MongoDB.png";
import css from "./skills.module.css";

const Skills = () => {

    return (
        <div className={css.iconsContainer}>
            <img className={css.reactLogo} src={reactLogo} alt="React" />
            <img className={css.htmlLogo} src={htmlLogo} alt="HTML" />
            <img className={css.cssLogo} src={cssLogo} alt="CSS" />
            <img className={css.jsLogo} src={JSLogo} alt="JavaScript" />
            <img className={css.nodejsLogo} src={NodeJS} alt="NodeJS" />
            <img className={css.mongoDB} src={MongoDB} alt="mongoDB" />
        </div>

    )
}

export default Skills;