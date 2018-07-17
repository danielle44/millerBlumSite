import React, { Component } from 'react';

class IntroImage extends Component {

    constructor(props) {
        super(props);

        this.backgroundImageStyle = this.backgroundImageStyle.bind(this);
    }

    backgroundImageStyle() {
        return {
            'background-image': `url(../img/intro/${this.props.imageName})`
        };
    }

    render() {
        return (
            <div className={"intro " + ((this.props.shouldShow) ? 'show' : 'hidden')}  style={this.backgroundImageStyle()}>
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
        );
    }
}

export default IntroImage;