import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer, Navigation, About, Projects, Contact, Clients, Intro, ProjectsGrid } from './components';

class App extends Component {

  render() {
    return (
        <div id="page-top" className="App" data-spy="scroll" data-target=".navbar-fixed-top">

            <Router>
                <div>
                    <Navigation/>
                    <div id='#content'>
                        <Route exact path="/" component={Intro} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/clients" component={Clients} />
                        <Route path="/grid" component={ProjectsGrid} />
                    </div>
                </div>
            </Router>
            <Footer/>

        </div>
    );
  }
}

export default App;