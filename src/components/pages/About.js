import React, { Component } from 'react';
import strings from '../../i18n/strings';

class About extends Component {
    render() {
        return (
            <div id="about" className='page'>
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>{strings.about.title}</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6"> <img src="/img/about.jpg" className="img-responsive black-and-white" alt=""/> </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h3>{strings.about.content.title}</h3>
                                <p>{strings.about.content.text1}</p>
                                <p>{strings.about.content.text2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;