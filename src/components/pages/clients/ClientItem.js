import React, { Component } from 'react';

class ClientItem extends Component {
    render() {
        return (
            <div className="client-item col-xs-6 col-md-3">
                <img src={this.props.logo} className="img-responsive" alt={this.props.title}/>
            </div>
        );
    }
}

export default ClientItem;