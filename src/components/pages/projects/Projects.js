import React, { Component } from 'react';
import {get as getProjects} from './ProjectsProvider';
import ProjectsGrid from './ProjectsGrid';
import ProjectsFilters from './ProjectsFilters';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="portfolio" className='page'>
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Projects</h2>
                        <hr/>
                    </div>
                    <ProjectsFilters/>
                    <div className="row">
                        <div className="portfolio-items">
                            <ProjectsGrid projects={getProjects()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;