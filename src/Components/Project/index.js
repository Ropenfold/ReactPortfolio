import React from 'react';
import css from '../Project/project.module.css';

const Project = (props) => {
    return(
        <>
    <div className={css.projectCard}>
            <img src={`${props.imageLink}`} alt="project" />
            <div className={css.container}>
                <div>{props.name}</div>
                <div>{props.description}</div>
                <div>{props.createdUsing}</div>
                <div>{props.gitHubLink}</div>
                </div>
    </div>
    </>
)}

export default Project;