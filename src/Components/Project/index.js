import React from 'react';
import css from '../Project/project.module.css';
import GitHub from '../../images/github-logo.png';
import "../../../src/root.css";

const Project = (props) => {
    const { name, description, createdUsing, gitHubLink, imageLink} = props;
    return(
        <div className={css.mainContainer}>
            <div className={css.barLine}><h1>{name}</h1></div>
            <img src={imageLink} alt={description} />
            <div className={css.description}>{description}</div>
            <div className={css.createdUsing}><div className={css.created}>Created Using:</div>{createdUsing}</div>
            <div className={css.gitHubContainer}><img className={css.gitHubLogo} src={GitHub} alt="gitHub logo"></img>
                <div className={css.gitHubLink}><a href={gitHubLink}>{gitHubLink}</a></div></div>
        </div>
    )

}

export default Project;