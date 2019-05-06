import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Project from '../Project';
import data from '../../data/data.js';
import css from '../Carousel/carousel.module.css';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: data.projects
        }
    }    
    
    render(){
            return (
                <Slider>
                
                     {data.projects.map((project, idx) => 
                         <div>
                            <Project name={project.name} 
                                     description={project.description}
                                     createdUsing={project.createdUsing}
                                     gitHubLink={project.gitHubLink}
                                     imageLink={project.imageLink}  
                             />
                         </div>
                         
                     )}
                 
                </Slider>
            )
        }
}

export default Carousel;