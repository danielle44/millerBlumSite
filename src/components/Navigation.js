import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top on">
                <div className="container">

                    <div className="navbar-header">
                        <a className="navbar-brand page-scroll" href="/projects">
                            <img src="/img/logo/logo.jpg" className="img-responsive" alt="Miller-Blum"/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/projects" className="page-scroll">Projects</Link>
                            </li>
                            <li>
                                <Link to="/about" className="page-scroll">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="page-scroll">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;