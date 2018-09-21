import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

class PhotosLine extends Component {
    constructor(props){
        super(props);

        this.decorateImages = this.decorateImages.bind(this);

        this.state = {
            images: this.decorateImages(this.props.images)
        };
    }

    decorateImages(images) {
        return images.map(imageUrl => ({
            src: imageUrl,
            thumbnail: imageUrl,
            thumbnailWidth: 228,
            thumbnailHeight: 228
        }));
    }

    render () {
        let tileStyle = function() {
            return {};
        };


        let imgSstyle = function() {
            return {
                border: "4px solid black",
                width: "100%",
                height: "100%",
            };
        };

        return (
            <div className='photos-line'>
                <Gallery
                    images={this.state.images}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    currentImage={this.props.index | 0}
                    showCloseButton={false}
                    margin={2}
                    tileViewportStyle={tileStyle}
                    thumbnailStyle={imgSstyle}
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