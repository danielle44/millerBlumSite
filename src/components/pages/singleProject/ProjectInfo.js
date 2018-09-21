import React, { Component } from 'react';
import {getSizeLetter} from "../../../providers/sizeProvider";
import {getLocationName} from "../../../providers/locationProvider";
import ProjectInfoKeyValue from './ProjectInfoKeyValue';

class ProjectInfo extends Component {

    render() {
        let project = this.props.project;

        return (
            <div className='project-info'>
                <ProjectInfoKeyValue k="description" v={project.desc}/>
                <ProjectInfoKeyValue k="year" v={project.year}/>
                <ProjectInfoKeyValue k="customer" v={project.customer}/>
                <ProjectInfoKeyValue k="size" v={`${project.size} cm² (${getSizeLetter(project.size)})`}/>
                <ProjectInfoKeyValue k="location" v={getLocationName(project.locationId)}/>
            </div>
        );
    }
}

export default ProjectInfo;