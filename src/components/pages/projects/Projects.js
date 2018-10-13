import React, { Component } from 'react';
import {get as getAllProjects} from '../../../providers/projectsProvider';
import ProjectsGrid from './ProjectsGrid';
import ProjectsFilters from './ProjectsFilters';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.categoryChanged = this.categoryChanged.bind(this);
        this.getFilteredProjects = this.getFilteredProjects.bind(this);

        this.state = {
            activeCategory: 'all'
        }
    }

    categoryChanged(category) {
        this.setState({ activeCategory: category });
    }

    getFilteredProjects() {
        let allProjects = getAllProjects();
        let { activeCategory } = this.state;

        if (activeCategory === 'all') {
            return allProjects;
        }

        return allProjects
            .filter(project => project.categories.includes(activeCategory));
    }

    render() {
        return (
            <div id="portfolio" className='page'>
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Projects</h2>
                        <hr/>
                    </div>
                    <ProjectsFilters onChange={this.categoryChanged}/>

                    <div className="row">
                        <div className="portfolio-items">
                            <ProjectsGrid projects={this.getFilteredProjects()} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;