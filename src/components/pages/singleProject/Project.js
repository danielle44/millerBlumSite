import React, { Component } from 'react';

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
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;