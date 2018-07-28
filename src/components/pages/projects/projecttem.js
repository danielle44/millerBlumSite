import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <div className={`col-sm-6 col-md-3 col-lg-3 lorem ${this.props.categories}`}>
                <div className="portfolio-item">
                    <div className="hover-bg"> <a href={this.props.thumbnail} title={this.props.title} data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                            <h4>{this.props.title}</h4>
                        </div>
                        <img src={this.props.thumbnail} className="img-responsive" alt={this.props.title}/> </a> </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;