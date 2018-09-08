import React, { Component } from 'react';
import {get as getSingleProject} from '../../../providers/singleProjectProvider';
import PhotosSlide from '../../PhotosSlide';
import {getSizeLetter} from "../../../providers/sizeProvider";
import {getLocationName} from "../../../providers/locationProvider";

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
                        <h2>desc: {this.project.desc}</h2>
                        <h2>year: {this.project.year}</h2>
                        <h2>customer: {this.project.customer}</h2>
                        <h2>size: {this.project.size} cm² ({getSizeLetter(this.project.size)})</h2>
                        <h2>location: {getLocationName(this.project.locationId)}</h2>

                        <PhotosSlide images={this.project.photos} title={this.project.title}/>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;