import React, { Component } from 'react';
import {get as getProjects} from './ProjectsProvider';
import {projectCategoriesData} from '../../../mocks/projectCategories';
import ProjectsGrid from './ProjectsGrid';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.createFilterItem = this.createFilterItem.bind(this);
        this.createFilters = this.createFilters.bind(this);
        this.addEmptyFilter = this.addEmptyFilter.bind(this);
    }

    createFilterItem({ title, filter }) {
        return (
            <li key={filter} data-filter={filter} className='filter-item'><a>{title}</a></li>
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
            <div id="portfolio" className='page'>
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
                            <ProjectsGrid projects={getProjects()}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;