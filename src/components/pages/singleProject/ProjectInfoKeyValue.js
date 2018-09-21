import React, { Component } from 'react';

class ProjectInfoKeyValue extends Component {
    render() {
        let {k, v} = this.props;

        return (
            <div className="project-info-key-value">
                <div className="project-info-key">{k}</div>
                <div className="project-info-value">{v}</div>
            </div>
        );
    }
}

export default ProjectInfoKeyValue;