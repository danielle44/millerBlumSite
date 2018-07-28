import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import _ from 'underscore';
import {projectsLightData} from '../../../mocks/projectsLight';
import {projectCategoriesData} from '../../../mocks/projectCategories';
import ProjectItem from './projecttem';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.createProjectItem = this.createProjectItem.bind(this);
        this.createFilterItem = this.createFilterItem.bind(this);
        this.createFilters = this.createFilters.bind(this);
        this.addEmptyFilter = this.addEmptyFilter.bind(this);
    }

    createProjectItem({ id, title, thumbnail, categories }) {
        return (
            <ProjectItem
                key={id}
                title={title}
                thumbnail={thumbnail}
                categories={categories}
            />
        )
    }

    createFilterItem({ title, filter }) {
        return (
            <li key={filter}><a data-filter={filter}>{title}</a></li>
        )
    }

    createFilters() {
        let filters = projectCategoriesData
            .map((category) => ({
                title: category.title,
                filter: `.${category.id}`
            }));

        filters = this.addEmptyFilter(filters);
        return filters.map(this.createFilterItem);
    }

    addEmptyFilter(filters) {
        let noFilters = {title: 'All', filter: '*'};
        filters = [noFilters, ...filters];
        return filters;
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
                                    {this.createFilters()}
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {projectsLightData.map(this.createProjectItem)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;