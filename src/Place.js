import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Map1 from './Map1.js';

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.856614%2C2.3522219&radius=20000&keyword=things%20to%20do%20in%20Paris&rankby=prominence&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.033554,-78.507980&radius=3000&keyword=attractions&key=AIzaSyBpOYv-IGc-A32HwamYneZsTa1FsquVnrM
const frontUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';

export default class Place extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: [],  // Be careful with arrays!!!!!!
            fields: {typeWord: "", 
            radius: ""}
        };
    };
    
    onSubmit = (fields) => {
        this.setState({ fields});
        let typeWord = this.state.fields.typeWord;
        let radiusNum = parseFloat(this.state.fields.radius) * 1609.34; // Miles to meters
        let radiusStr = radiusNum.toString();
        console.log("Type: " + typeWord + " Radius: " + radiusStr);
       
        axios.get(frontUrl+'location=38.034269,%20-78.494087&radius='+radiusStr+'&keyword='+typeWord+'&key='+key)
        .then( (response) =>{
            let axiosPlaces = response.data.results.map((place)=>{
            return {key: place.id, name: place.name, types: place.types, address: place.vicinity, 
                    coord: [place.geometry.location.lng, place.geometry.location.lat]}
        });
        this.setState({
            places: axiosPlaces, 
        });
        console.log(this.state.places);
    })
        .catch(function (error) {
        console.log(error);
        });
    };
    
    render() {
    
    const listy = (
        <div>
      {/* {this.state.places.map((p) => 
        <div key={p.id}>
          <p> Name: {p.name} </p>
          <p> Type: {p.type} </p> 
          <p> Lat: {p.location.lat} </p>
          <p> Open: {p.open_hours}</p>
        </div>
        
      )} */}
     </div> 
    );
    

      return (
        <div>
        <Form onSubmit = {fields => this.onSubmit(fields)}/>
        {listy}
        <Map1 data1 = {this.state.places} />
        </div>
      );
    }
}