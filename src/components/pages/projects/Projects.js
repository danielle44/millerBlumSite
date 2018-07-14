import React, { Component } from 'react';
import {projectsLightData} from '../../../mocks/projectsLight';
import {projectCategoriesData} from '../../../mocks/projectCategories';
import ProjectItem from './projecttem';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.createProjectLightItem = this.createProjectLightItem.bind(this);
    }

    createProjectLightItem({ title, thumbnail, categories }) {
        return (
            <ProjectItem
                title={title}
                thumbnail={thumbnail}
                categories={categories}
            />
        )
    }

    render() {
        return (
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Projects</h2>
                        <hr/>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".lorem">Lorem Ipsum</a></li>
                                    <li><a href="#" data-filter=".dolor">Dolor Sit</a></li>
                                    <li><a href="#" data-filter=".adipiscing">Adipiscing Elit</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {projectsLightData.map(this.createProjectLightItem)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;