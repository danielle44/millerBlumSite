import React, { Component } from 'react';
import {clientsData} from '../../../mocks/clients';
import ClientItem from './ClientItem';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.createClientItem = this.createClientItem.bind(this);
    }

    createClientItem({ id, title, logo }) {
        return <ClientItem key={id} title={title} logo={logo}/>;
    }

    render() {
        return (
            <div id="services" className="text-center page">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2>Our Clients</h2>
                        <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="row">
                        {clientsData.map(this.createClientItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;