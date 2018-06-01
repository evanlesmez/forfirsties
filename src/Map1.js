import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import { Popup } from "react-mapbox-gl";
import { ZoomControl } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";
import Button from '@material-ui/core/Button';



const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZGVlcGFrZzEyMyIsImEiOiJjamhtN3gxNzcwOXdkMzBwbGM0dXRpYmZxIn0.qN-2IKGQMoYjyg8rHThRLA'
  });

  class Map1 extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          center: [-78.5080, 38.0336],
          zoom: [13],
          popupcoord: [135.0000, 82.8628], 
          popupname: "", 
          address:""  
        }; 

    }

    onSubmit = e => {
      e.preventDefault();
      this.setState({
        center: [-78.5080, 38.0336], 
        zoom: [13],
        popupcoord: [135.0000, 82.8628]
      }); 
    };
    changeCenter = e => {
      e.preventDefault();
      this.setState({
        center: [this.props.long, this.props.latt], 
        zoom: [15],
        popupcoord: [this.props.long, this.props.latt]
      }); 
    };


    render() {
      let markers = this.props.data1.map(shop => {
        return (
          <Marker
          key = {shop.key}
          coordinates={shop.coord}
          anchor="bottom"
          onClick={(e) => {
            this.setState({center:shop.coord, zoom: [15]});
            this.setState({popupcoord: shop.coord, popupname: shop.name, address: shop.address})
            }
            }
          >
          <img src={"http://maps.google.com/mapfiles/ms/icons/red.png"}/>
          </Marker>
        );
      });
      
      return (
        <div>
        <Map
          style="mapbox://styles/deepakg123/cjhqzkvx54nra2qmjyc8d4n7t"
          containerStyle={{ width: '80vw', height: '80vh'}}
          center = {this.state.center}
          zoom = {this.state.zoom}

        >
        {markers}
        <ZoomControl/>
        <ScaleControl/>
        <Popup
            coordinates={this.state.popupcoord}
            offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}>
            <p>{this.state.popupname}</p>
            <p>{this.state.address}</p>

        </Popup>
        </Map>

        <Button variant="raised" color="secondary"  
        onClick = {e => this.onSubmit(e)}>
        Charlottesville 
      </Button>
      <Button variant="raised" color="secondary"  
        onClick = {e => this.changeCenter(e)}>
        Zoom to Address (Submit First)
      </Button>
      </div> 
      );
    }
  }

  export default Map1; 
