import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer, Navigation, About, Projects, Contact, Clients, Intro, Project, ChartPage } from './components';
import { initLanguage } from './i18n/languageSetter';

class App extends Component {

    constructor(props) {
        super(props);
        initLanguage();
    }

    render() {
        return (
            <div id="page-top" className="App" data-spy="scroll" data-target=".navbar-fixed-top">

                <div className="above-footer">
                    <Router>
                        <div>
                            <Navigation/>
                            <div id='#content' className='content'>
                                <Route exact path="/" component={Intro} />
                                <Route exact path="/projects" component={Projects} />
                                <Route path="/projects/:id" component={Project} />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/clients" component={Clients} />
                                <Route path="/chart" component={ChartPage} />
                            </div>
                        </div>
                    </Router>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default App;