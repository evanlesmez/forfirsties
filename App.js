import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Place from './Place.js';
import Form from './Form.js'
import Map1 from './Map1.js'
import axios from 'axios'; 
let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';

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
  constructor() {
    super();
    this.state = {
        data: [] 
    }
}
componentDidMount(){
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.033554,-78.507980&radius=1500&type=coffee&keyword=coffee&key=AIzaSyBpOYv-IGc-A32HwamYneZsTa1FsquVnrM')
  .then(res => {
    const coffeshops = res.data.results;
    console.log(coffeshops)
    this.setState({
      data: coffeshops
    });  
    let array = this.state.data.map(shop => {
      return {
        key: shop.id,
        name: shop.name,
        coord: [shop.geometry.location.lng, shop.geometry.location.lat],
      }
    }); 
    console.log(array); 
    this.setState({
      data:array
    })
  })
}


  render() { 
    console.log(this.state.data)
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
      <Map1 data1={this.state.data} />
      </div>
    );
  }
}

export default App;
