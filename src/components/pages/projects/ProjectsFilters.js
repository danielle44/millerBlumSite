import React, { Component } from 'react';
import {projectCategoriesData} from '../../../mocks/projectCategories';

class ProjectsFilters extends Component {
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
        );
    }
}

export default ProjectsFilters;