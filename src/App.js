import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Main from './components/commons/Main';
import Sidebar from './components/commons/Sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="container-fluid bg-dark">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <Main />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
