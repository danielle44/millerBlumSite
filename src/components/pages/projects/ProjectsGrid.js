import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import ProjectsItem from './ProjectsItem';
import {addDimensions} from './DimensionsAdder';

class ProjectsGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = { width: -1, projects: addDimensions(props.projects), selectAll: false };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ projects: addDimensions(newProps.projects) });
    }

    render() {
        const width = this.state.width;
        return (
            <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
                {
                    ({measureRef}) => {
                        if (width < 1 ){
                            return <div ref={measureRef}></div>;
                        }
                        let columns = 1;
                        if (width >= 480){
                            columns = 3;
                        }
                        if (width >= 1024){
                            columns = 5;
                        }
                        if (width >= 1824){
                            columns = 7;
                        }
                        return <div ref={measureRef}>
                            <Gallery photos={this.state.projects} columns={columns} ImageComponent={ProjectsItem} />
                        </div>
                    }
                }
            </Measure>
        )
    }
}

export default ProjectsGrid;