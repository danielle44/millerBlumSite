import React from 'react';

const ProjectsItem = ({ photo: project }) => {
    return (
        <div className={`portfolio-item ${project.categories}`}>
            <div className='hover-bg'>
                <div className="hover-text">
                    <h4>{project.title}</h4>
                </div>
                <img
                    alt={project.title}
                    src={project.thumbnail}
                    className='img-responsive'
                    style={{height: project.height, width: project.width}}
                    onClick={(e) => console.log('photo was clicked')}
                />
            </div>
        </div>
    )
};

export default ProjectsItem;