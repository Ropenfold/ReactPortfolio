import React from "react";
import data from "../../../src/data";
import Project from "../Project";
import css from "../Projects/projects.module.css";
import "../../../src/root.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: data.projects,
      project: data.projects[0]
    };
  }

  nextProject = () => {
    const newIndex = this.state.project.index + 1;
    this.setState({
      project: data.project[newIndex]
    });
  };

  prevProject = () => {
    const newIndex = this.state.project.index - 1;
    this.setState({
      project: data.project[newIndex]
    });
  };

  render() {
    return (
      <div className={css.totalContainer}>
        <div className={css.projectsContainer}>
          {data.projects.map((project, idx) => {
            return (
              <Project
                name={project.name}
                description={project.description}
                createdUsing={project.createdUsing}
                gitHubLink={project.gitHubLink}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
