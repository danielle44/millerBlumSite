import React, { Component } from 'react';
import NavigationLogo from './NavigationLogo';
import NavigationItem from './NavigationItem';
import LanguageChanger from './LanguageChanger';

const navItems = [
    { route: "/projects", title: "Projects" },
    { route: "/about", title: "About Us" },
    { route: "/contact", title: "Contact Us" },
    { route: "/clients", title: "Clients" },
    { route: "/chart", title: "Chart" },
    { route: "/graph", title: "Graph" },
];

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.createNavItem = this.createNavItem.bind(this);
    }

    createNavItem({route, title}) {
        return (
            <NavigationItem key={route} route={route} title={title}/>
        )
    }

    render() {
        return (
            <div className="header">
                <nav id="menu" className="navbar navbar-default navbar-fixed-top on">
                    <div className="container">

                        <NavigationLogo/>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                {navItems.map(this.createNavItem)}
                                <li><LanguageChanger/></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;