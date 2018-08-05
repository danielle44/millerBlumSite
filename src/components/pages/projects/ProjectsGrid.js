import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import SelectedProject from './SelectedProject';

const photos = [
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, text: 'a' },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, text: 'b' },
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, text: 'c' },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
    { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

class ProjectsGrid extends React.Component {
    constructor() {
        super();
        this.state = { width: -1, photos: photos, selectAll: false };
        this.selectPhoto = this.selectPhoto.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);
    }

    selectPhoto(event, obj) {
        let photos = this.state.photos;
        photos[obj.index].selected = !photos[obj.index].selected;
        this.setState({ photos: photos });
    }

    toggleSelect() {
        let photos = this.state.photos.map((photo, index) => { return { ...photo, selected: !this.state.selectAll } });
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
                            columns = 2;
                        }
                        if (width >= 1024){
                            columns = 3;
                        }
                        if (width >= 1824){
                            columns = 4;
                        }
                        return <div ref={measureRef}>
                            <Gallery photos={this.state.photos} columns={columns} onClick={this.selectPhoto} ImageComponent={SelectedProject} />
                        </div>
                    }
                }
            </Measure>
        )
    }
}

export default ProjectsGrid;