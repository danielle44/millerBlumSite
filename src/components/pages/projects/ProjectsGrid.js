import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import SelectedProject from './SelectedProject';
import {addDimensions} from './DimensionsAdder';

class ProjectsGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = { width: -1, projects: addDimensions(props.projects), selectAll: false };

        this.selectPhoto = this.selectPhoto.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    selectPhoto(event, obj) {
        let photos = this.state.projects;
        photos[obj.index].selected = !photos[obj.index].selected;
        this.setState({ photos: photos });
    }

    toggleSelect() {
        let photos = this.state.projects.map((photo, index) => { return { ...photo, selected: !this.state.selectAll } });
        this.setState({ photos: photos, selectAll: !this.state.selectAll });
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
                            <Gallery photos={this.state.projects} columns={columns} onClick={this.selectPhoto} ImageComponent={SelectedProject} />
                        </div>
                    }
                }
            </Measure>
        )
    }
}

export default ProjectsGrid;