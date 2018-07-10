import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationLogo from './NavigationLogo';
import NavigationItem from './NavigationItem';

const navItems = [
    { route: "/projects", title: "Projects" },
    { route: "/about", title: "About Us" },
    { route: "/contact", title: "Contact Us" }
];

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.createNavItem = this.createNavItem.bind(this);
    }

    createNavItem({route, title}) {
        return (
            <NavigationItem route={route} title={title}/>
        )
    }

    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top on">
                <div className="container">

                    <NavigationLogo/>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {navItems.map(this.createNavItem)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;