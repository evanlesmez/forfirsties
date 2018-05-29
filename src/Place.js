import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form.js';

let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';
export default class Place extends Component {
    constructor(props){
        super(props);
        this.state = {
            places: this.props.p,  // Be careful with arrays!!!!!!
            fields: {}
            // name: "",
        //     radius: "",
        //     type: "",
        // location: {
        // lat: "",
        // long: ""
        // },
        // open_now: true
        }

    }
    // componentDidMount(){
    //     axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.034269,%20-78.494087&radius=1500&keyword=library&key='+key)
    // .then(function (response) {
    // console.log(response);
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
    // }
    componentDidMount(){
        
        console.log(this.state.places);
        let realPlaces = this.state.places.map((place)=>{
            return {id: place.id, name: place.name, type: place.type, 
                location: place.location, open_now: place.open_now }
        })
        
        this.setState({places: realPlaces});
            console.log(this.state.places);
    }
     
    onSubmit = (fields) => {
        this.setState({ fields});
        console.log({fields});
    };
    render() {
    
    const listy = (
        <div>
      {this.state.places.map((p) => 
        <div key={p.id}>
          <p> Name: {p.name} </p>
          <p> Type: {p.type} </p> 
          <p> Lat: {p.location.lat} </p>
          <p> Open: {p.open_hours}</p>
        </div>
        
      )}
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