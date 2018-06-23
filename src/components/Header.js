import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="intro-text"> <span>Welcome to</span>
                                    <h1>Standout</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing. <br/>
                                        Duis sed dapibus leo nec ornare diam.</p>
                                    <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;