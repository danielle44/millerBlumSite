import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Projects</h2>
                        <hr/>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".lorem">Lorem Ipsum</a></li>
                                    <li><a href="#" data-filter=".dolor">Dolor Sit</a></li>
                                    <li><a href="#" data-filter=".adipiscing">Adipiscing Elit</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_lake.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="/img/projects/Jerusalem Biblical Zoo/Jerusalem_Zoo_lake.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="/img/projects/Keryat Arie - Azorim Park/Keryat Arie - up.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="/img/projects/Keryat Arie - Azorim Park/Keryat Arie - up.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="/img/projects/Kiryat Rabin/kiryat rabin bench.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="/img/projects/Kiryat Rabin/kiryat rabin bench.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="/img/projects/Yavne G/yavneG1.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="/img/projects/Yavne G/yavneG1.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;