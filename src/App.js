import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './Place.js';

// This is adds a benefit that google maps lacks because it enables toggling different places at the same time

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Place/>
          
      </div>
    );
  }
}

export default App;
