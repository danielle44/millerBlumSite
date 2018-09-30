import React, { Component } from 'react';
import {get as getSingleProject} from '../../../providers/singleProjectProvider';
import PhotosLine from './PhotosLine';
import ProjectInfo from './ProjectInfo';

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
                        <h2>{this.project.title}</h2>
                        <hr/>
                    </div>

                    <div className="row">
                        <div className="col-xs-16 col-md-8">
                            <ProjectInfo project={this.project}/>
                        </div>

                        <div className="col-xs-8 col-md-4">
                            <div className="project-photos">
                                <PhotosLine images={this.project.photos}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Project;