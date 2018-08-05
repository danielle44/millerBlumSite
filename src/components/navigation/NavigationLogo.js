import React, { Component } from 'react';

class NavigationLogo extends Component {
    render() {
        return (
            <div className="navbar-header">
                <a className="navbar-brand page-scroll" href="/">
                    <img src="/img/logo/logo.jpg" className="img-responsive" alt="Danielle"/>
                </a>
            </div>
        );
    }
}

export default NavigationLogo;