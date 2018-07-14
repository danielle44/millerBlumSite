import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer, Navigation, About, Projects, Contact, Intro } from './components';

class App extends Component {

  render() {
    return (
        <div id="page-top" className="App" data-spy="scroll" data-target=".navbar-fixed-top">

            <Router>
                <div>
                    <Navigation/>

                    <Route exact path="/" component={Intro} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />

                </div>

            </Router>
            <Footer/>

        </div>
    );
  }
}

export default App;