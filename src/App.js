import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Main from './components/commons/Main';


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
