import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './Place.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "title" >
      <b> For the Firsties </b>
        </div> 
      {/* <img src="Outstanding-Road-Map-Vectors-3.svg"  width="42" height="42">
      </img> */}
          <Place/>
      </div>
    );
  }
}

export default App;
