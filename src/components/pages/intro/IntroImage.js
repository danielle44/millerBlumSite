import React, { Component } from 'react';
import strings from '../../../i18n/strings';

class IntroImage extends Component {

    constructor(props) {
        super(props);

        this.backgroundImageStyle = this.backgroundImageStyle.bind(this);
    }

    backgroundImageStyle() {
        return {
            'backgroundImage': `url(../img/intro/${this.props.imageName})`
        };
    }

    render() {
        return (
            <div className={"intro " + ((this.props.shouldShow) ? 'show' : 'hidden')}  style={this.backgroundImageStyle()}>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="intro-text"> <span>Welcome to</span>
                                <h1>{strings.brand.name}</h1>
                                <p>{strings.brand.landArchitecture}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroImage;