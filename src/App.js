import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './Place.js';
import Form from './Form.js'

let dumbPlaces = [
  {id: 0, name: "Aldy", type: "library",
  location: {
    lat: "38.0364566",
    long: "-78.5053683"
  },
  open_now: true
},
{id: 1, name: "Clem", type: "library",
location: {
  lat: "38.036346",
  long: "-78.506085"
},
open_now: true
}
];
class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Place p = {dumbPlaces}/>
          
      </div>
    );
  }
}

export default App;
