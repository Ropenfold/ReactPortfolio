import React from "react";
import css from "../Projects/projects.module.css";
import "../../../src/root.css";
import Carousel from '../Carousel'


class Projects extends React.Component {

  render() {
    return (
      <div className={css.totalContainer}>
        
          <Carousel />
        </div>
    );
  }
}

export default Projects;