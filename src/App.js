import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './Place.js';



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
