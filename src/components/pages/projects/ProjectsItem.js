import React from 'react';
import { Link } from 'react-router-dom';
import {getLocationName} from "../../../providers/locationProvider";
import {getSizeLetter} from "../../../providers/sizeProvider";

const ProjectsItem = ({ photo: project }) => {
    return (
        <div className={`portfolio-item ${project.categories}`} onClick={project.onClick}>
            <Link to={`/projects/${project.id}`} className="page-scroll">
                <div className='hover-bg'>
                    <div className="hover-text">
                        <h4>{project.title} - size: {getSizeLetter(project)} - location: {getLocationName(project)}</h4>
                    </div>

                        <img
                            alt={project.title}
                            src={project.thumbnail}
                            className='img-responsive'
                            style={{height: project.height, width: project.width}}
                        />
                </div>
            </Link>
        </div>
    )
};

export default ProjectsItem;