import React from 'react';

const SelectedProject = ({ photo: project }) => {
    return (
        <div className='portfolio-item'>
            <div className="hover-bg">
                <div className="hover-text" alt={project.text}>
                    <h4>{project.text}</h4>
                </div>
                <img
                    src={project.src}
                    className='img-responsive'
                    style={{height: project.height, width: project.width}}
                    onClick={(e) => console.log('photo was clicked')}
                />
            </div>
        </div>
    )
};

export default SelectedProject;
