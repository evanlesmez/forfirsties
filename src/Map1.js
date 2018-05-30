import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { Popup } from "react-mapbox-gl";
import { Cluster } from "react-mapbox-gl";
import { ZoomControl } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";
import axios from 'axios';
let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';



const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZGVlcGFrZzEyMyIsImEiOiJjamhtN3gxNzcwOXdkMzBwbGM0dXRpYmZxIn0.qN-2IKGQMoYjyg8rHThRLA'
  });

 

  class Map1 extends React.Component {
    
    constructor() {
        super();
        this.state = {
            center: [-78.5080, 38.0336],
            zoom: [15],
            popups: null,  
        }; 
    }

  
    



    render() {

      console.log(this.props.data1)
      const markers = this.props.data1.map(shop => {
        return (
          <Marker
          key = {shop.key}
          coordinates={shop.coord}
          anchor="bottom"
          onClick={(e) => {
            this.setState({center:shop.coord, zoom: [18]});
            
            }
            }
          >
          <img src={"http://maps.google.com/mapfiles/ms/icons/red.png"}/>
          </Marker>
        );
      });
      const popups = this.props.data1.map(shop => {
        return (
          <Popup
          coordinates={shop.coord}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}>
          <p>Popup</p>
        </Popup>
        );
      });
      console.log(markers);
      return (
        <Map
          style="mapbox://styles/deepakg123/cjhqzkvx54nra2qmjyc8d4n7t"
          containerStyle={{ width: '100vw', height: '70vh'}}
          center = {this.state.center}
          zoom = {this.state.zoom}
        >
        <ZoomControl/>
        <ScaleControl/>
        {/* <Popup
          coordinates={[-78.506085, 38.036346]}
          offset={{
            'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
          }}>
          <h1>Popup</h1>
        </Popup> */}

      {markers}
      {/* {popups} */}
        
        </Map>
      );
    }
  }

  export default Map1; 
