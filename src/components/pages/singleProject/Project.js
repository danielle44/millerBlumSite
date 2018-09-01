import React, { Component } from 'react';
import {get as getSingleProject} from '../../../providers/singleProjectProvider';

class Project extends Component {
    constructor({match}) {
        super();
        this.projectId = match.params.id;
    }

    render() {
        return (
            <div id="project" className='page'>
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>PROJECT {this.projectId}</h2>
                        <h2>{getSingleProject(this.projectId).title}</h2>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;