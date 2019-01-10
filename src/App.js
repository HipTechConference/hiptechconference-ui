import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Main from './components/commons/Main';
import Activities from './components/Activities';
import Entertainment from './components/Entertainment';
import Index from './components/Index';
import Speakers from './components/Speakers';
import Venue from './components/Venue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <Main />
          <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
