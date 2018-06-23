import React, { Component } from 'react';
import './App.css';
import { Footer, Navigation, Header, About, Projects, Contact } from './components';

class App extends Component {

  render() {
    return (
        <div id="page-top" className="App" data-spy="scroll" data-target=".navbar-fixed-top">

            <Navigation/>
            <Header/>

            <Projects/>
            <About/>
            <Contact/>

            <Footer/>

        </div>
    );
  }
}

export default App;