import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form.js';

let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';
export default class Place extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: [],  // Be careful with arrays!!!!!!
            fields: {type: "", 
            radius: ""}
        };

    };
    
    onSubmit = (fields) => {
        this.setState({ fields});
        let type = this.state.fields.type;
        let radiusNum = parseFloat(this.state.fields.radius) * 1609.34; // Miles to meters
        let radiusStr = radiusNum.toString();
        console.log("Type: " + type + " Radius: " + radiusStr);
        
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.034269,%20-78.494087&radius='+radiusStr+'&keyword='+type+'&key='+key)
        .then( (response) =>{
        let axiosPlaces = response.data.results.map((place)=>{
        return {id: place.id, name: place.name, types: place.types, 
                location: place.geometry.location }
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
        </div>
      );
    }
}