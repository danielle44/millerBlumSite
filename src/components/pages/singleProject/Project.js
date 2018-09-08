import React, { Component } from 'react';
import {get as getSingleProject} from '../../../providers/singleProjectProvider';
import PhotosSlide from '../../PhotosSlide';

class Project extends Component {
    constructor({match}) {
        super();
        this.project = getSingleProject(match.params.id);
    }

    render() {
        return (
            <div id="project" className='page'>
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>PROJECT {this.project.id}</h2>
                        <h2>{this.project.title}</h2>

                        <PhotosSlide images={this.project.photos} title={this.project.title}/>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;