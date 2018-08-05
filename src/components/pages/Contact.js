import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact" className="text-center page">
                <div className="container">
                    <div className="section-title center">
                        <h2>Contact Us</h2>
                        <hr/>
                    </div>
                    <div className="col-md-5 contact-half">
                        <p>Tel Aviv Office</p>

                        <div className="row">
                            <p className="row">
                                <span className="pairKey">Email: </span>
                                <span className="pairValue">mbtlv@mbtlv.com</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Address: </span>
                                <span className="pairValue">23 Aminadav, Tel Aviv</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Telephone: </span>
                                <span className="pairValue">+972-3-1111111</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Fax: </span>
                                <span className="pairValue">02323232</span>
                            </p>
                        </div>

                        <p className="row">
                            <img  src="/img/contact/tel aviv.jpg" className="img-responsive" alt="map tlv"/>
                        </p>
                    </div>

                    <div className="col-md-5 col-md-offset-2 contact-half">
                        <p>Haifa Office</p>
                        <div className="row">
                            <p className="row">
                                <span className="pairKey">Email: </span>
                                <span className="pairValue">mbtlv@mbtlv.com</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Address: </span>
                                <span className="pairValue">23 Aminadav, Tel Aviv</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Telephone: </span>
                                <span className="pairValue">+972-3-1111111</span>
                            </p>

                            <p className="row">
                                <span className="pairKey">Fax: </span>
                                <span className="pairValue">02323232</span>
                            </p>
                        </div>

                        <p className="row">
                            <img  src="/img/contact/haifa.jpg" className="img-responsive" alt="map tlv"/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;