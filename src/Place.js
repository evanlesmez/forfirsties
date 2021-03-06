import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Form from "./Form.js";
import Map1 from "./Map1.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// location=38.034269,%20-78.494087
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.856614%2C2.3522219&radius=20000&keyword=things%20to%20do%20in%20Paris&rankby=prominence&key=YOUR_API_KEY

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.033554,-78.507980&radius=3000&keyword=attractions&key=AIzaSyBpOYv-IGc-A32HwamYneZsTa1FsquVnrM
const frontUrl =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
let key = "AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM";

export default class Place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [], // Be careful with arrays!!!!!!
      lat: "",
      long: ""
    };
  }
  onSubmit = fields => {
    let street = fields.street;
    console.log(street);
    if (street != undefined) {
      street = street.split(" ").join("+");
      console.log(street);
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            street +
            "&key=" +
            key
        )
        .then(res => {
          this.setState({
            lat: res.data.results[0].geometry.location.lat,
            long: res.data.results[0].geometry.location.lng
          });
          fields.typeWord.map(word => {
            let typeWord = word;
            let radiusNum = parseFloat(fields.radius) * 1609.34; // Miles to meters
            let radiusStr = radiusNum.toString();
            axios
              .get(
                frontUrl +
                  "location=" +
                  this.state.lat +
                  ",%20" +
                  this.state.long +
                  "&radius=" +
                  radiusStr +
                  "&keyword=" +
                  typeWord +
                  "&key=" +
                  key
              )
              .then(response => {
                let axiosPlaces = this.state.places;
                response.data.results.map(place => {
                  return axiosPlaces.push({
                    key: place.id,
                    name: place.name,
                    types: place.types,
                    address: place.vicinity,
                    coord: [
                      place.geometry.location.lng,
                      place.geometry.location.lat
                    ]
                  });
                });
                this.setState({
                  places: axiosPlaces
                });
              })
              .catch(function(error) {
                console.log(error);
              });
            return this.state.places;
          });
        });
    }
  };

  onReset = e => {
    this.setState({
      places: [],
      fields: {
        typeWord: [],
        radius: "",
        street: ""
      },
      lat: "",
      long: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="components">
        <div class="Form">
          <Form
            onSubmit={fields => this.onSubmit(fields)}
            onReset={e => this.onReset(e)}
          />
        </div>
        <div class="Map">
          <Map1
            data1={this.state.places}
            latt={this.state.lat}
            long={this.state.long}
          />
        </div>
      </div>
    );
  }
}
