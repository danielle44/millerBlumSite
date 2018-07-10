import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationItem extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.route} className="page-scroll">{this.props.title}</Link>
            </li>
        );
    }
}

export default NavigationItem;