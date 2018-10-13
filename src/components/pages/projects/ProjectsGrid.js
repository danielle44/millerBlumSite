import React from "react";
import Gallery from "react-photo-gallery";
import {addDimensions} from "./DimensionsAdder";
import ProjectsItem from "./ProjectsItem";

class ProjectsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: -1, projects: addDimensions(props.projects), selectAll: false };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ projects: addDimensions(newProps.projects) });
    }


    render() {
        return <Gallery photos={this.state.projects} direction={"column"} ImageComponent={ProjectsItem} />;
    }
}

export default ProjectsGrid;