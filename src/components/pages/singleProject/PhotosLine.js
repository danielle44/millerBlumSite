import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

class PhotosLine extends Component {
    constructor(props){
        super(props);

        let images = [
            {
                src: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Biblical_Zoo_1940s.jpg",
                thumbnail: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Biblical_Zoo_1940s.jpg",
                thumbnailWidth: 240,
                thumbnailHeight: 240,
            },
            {
                src: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_lake.jpg",
                thumbnail: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_lake.jpg",
                thumbnailWidth: 240,
                thumbnailHeight: 240,
            },
            {
                src: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_spider_monkey.jpg",
                thumbnail: "/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_spider_monkey.jpg",
                thumbnailWidth: 240,
                thumbnailHeight: 240,
            },
            {
                src: "/img/projects/Jerusalem Biblical Zoo/Teddy_Jerusalem_Zoo.jpg",
                thumbnail: "/img/projects/Jerusalem Biblical Zoo/Teddy_Jerusalem_Zoo.jpg",
                thumbnailWidth: 240,
                thumbnailHeight: 240,
            }
        ];

        this.state = {
            images: images
        };
        // this.state = {
        //     images: this.props.images
        // };
    }

    render () {
        return (
            <div style={{
                display: "block",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    currentImage={this.props.index | 0}
                    showCloseButton={false}
                    margin={6}
                />
            </div>
        );
    }
}

PhotosLine.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

export default PhotosLine;