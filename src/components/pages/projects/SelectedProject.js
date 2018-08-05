import React from 'react';

const SelectedProject = ({ photo: project }) => {
    return (
        <div className={`portfolio-item ${project.categories}`}>
            <div className='hover-bg'>
                <div className="hover-text" alt={project.title}>
                    <h4>{project.title}</h4>
                </div>
                <img
                    src={project.thumbnail}
                    className='img-responsive'
                    style={{height: project.height, width: project.width}}
                    onClick={(e) => console.log('photo was clicked')}
                />
            </div>
        </div>
    )
};

export default SelectedProject;