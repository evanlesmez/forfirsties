import React, { Component } from 'react';
import axios from 'axios';

let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';
export default class Place extends Component {
    constructor(props){
        super(props);
        this.state = {
            radius: 3000,
            type: 'library',
            places: [this.props.p]
            
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
    render() {
        console.log(this.state.places);
      return (
        <div>

        </div>
      );
    }
}