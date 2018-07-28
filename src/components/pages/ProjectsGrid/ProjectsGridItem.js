import React, { Component } from 'react';

class ProjectsGridItem extends Component {
    render() {
        return (
            <span className={`text ${this.props.categories}`}>
                <div className="hidden hover-text">
                    <h4>{this.props.title}</h4>
                </div>
                <img src={this.props.thumbnail} className="img-responsive" alt={this.props.title}/>
            </span>
        );
    }
}

export default ProjectsGridItem;