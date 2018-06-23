import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
        <div id="page-top" className="App" data-spy="scroll" data-target=".navbar-fixed-top">
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        <a className="navbar-brand page-scroll" href="#page-top">Standout</a> </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about" className="page-scroll">About</a></li>
                            <li><a href="#services" className="page-scroll">Services</a></li>
                            <li><a href="#portfolio" className="page-scroll">Gallery</a></li>
                            <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
                            <li><a href="#contact" className="page-scroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

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

            <div id="about">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>About Us</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6"> <img src="img/about.png" className="img-responsive" alt=""/> </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h3>Lorem ipsum dolor sit amet!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="text-center">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title">
                        <h2>Our Services</h2>
                        <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o"></i>
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                        <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn"></i>
                            <h4>Dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
                        </div>
                        <div className="col-xs-6 col-md-3"> <i className="fa fa-group"></i>
                            <h4>Tempus eleifend</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                        </div>
                        <div className="col-xs-6 col-md-3"> <i className="fa fa-magic"></i>
                            <h4>Pellentesque</h4>
                            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Gallery</h2>
                        <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
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
                                    <div className="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/09-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/10-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/10-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/11-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/11-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/12-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/12-small.jpg" className="img-responsive" alt="Project Title"/> </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="achievements" className="text-center">
                <div className="overlay">
                    <div className="container">
                        <div className="section-title center">
                            <h2>Some Stats</h2>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <div className="achievement-box"> <span className="count">260</span>
                                    <h4>Customers</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="achievement-box"> <span className="count">83</span>
                                    <h4>Developers</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="achievement-box"> <span className="count">571</span>
                                    <h4>Projects</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                <div className="achievement-box"> <span className="count">12</span>
                                    <h4>Awards</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div id="testimonial" className="owl-carousel owl-theme">
                                <div className="item"> <img src="img/clients/01.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                                    <p><strong>John DOE</strong>, CEO, Company.</p>
                                </div>
                                <div className="item"> <img src="img/clients/02.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                                    <p><strong>Jenny DOE</strong>, CEO, Company.</p>
                                </div>
                                <div className="item"> <img src="img/clients/03.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                                    <p><strong>John DOE</strong>, CEO, Company.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title center">
                        <h2>Get In Touch</h2>
                        <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                                            <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                        </form>
                        <div className="social">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>Miller-Blum | מילר-בלום</p>
                </div>
            </div>
        </div>
    );
  }
}

export default App;