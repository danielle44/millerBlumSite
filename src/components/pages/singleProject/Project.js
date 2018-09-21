import React, { Component } from 'react';
import {get as getSingleProject} from '../../../providers/singleProjectProvider';
import {getSizeLetter} from "../../../providers/sizeProvider";
import {getLocationName} from "../../../providers/locationProvider";
import PhotosLine from './PhotosLine'

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
                    <div className={"project-info"}>
                        <div>desc: {this.project.desc}</div>
                        <div>year: {this.project.year}</div>
                        <div>customer: {this.project.customer}</div>
                        <div>size: {this.project.size} cm² ({getSizeLetter(this.project.size)})</div>
                        <div>location: {getLocationName(this.project.locationId)}</div>

                        <PhotosLine images={this.project.photos}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Project;