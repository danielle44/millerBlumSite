import React, { Component } from 'react';

let introImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg'
];

class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0
        };

        this.changeImage = this.changeImage.bind(this);
        this.getNextIndex = this.getNextIndex.bind(this);
        this.backgroundImageStyle = this.backgroundImageStyle.bind(this);
    }

    componentDidMount() {
        setInterval(this.changeImage, 4000)
    }

    changeImage() {
        this.setState({
            imageIndex: this.getNextIndex()
        })
    };

    getNextIndex() {
        let currentIndex = this.state.imageIndex + 1;
        return currentIndex % introImages.length;
    }

    backgroundImageStyle() {
        let nextImage = introImages[this.state.imageIndex];
        return {
            'background-image': `url(../img/intro/${nextImage})`
        };
    }

    render() {
        return (
            <header id="header">
                <div className="intro" style={this.backgroundImageStyle()}>
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="intro-text"> <span>Welcome to</span>
                                    <h1>Miller-Blum</h1>
                                    <p>Landscape Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Intro;