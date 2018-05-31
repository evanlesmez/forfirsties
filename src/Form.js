import React, { Component } from 'react';
import axios from 'axios'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';
let key = 'AIzaSyBScFw2LtRCXni2EFQDKgmaSFEwyLYRVGM';


export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      radius: "",
      typeWord: [],
      libraries: false,
      coffee: false,
      gyms: false, 
      attractions : false, 
      street: "", 
      city: ""  
 
    };
      // Confusing but could try to make a way to pass in a bunch of types rather
      // than hardcode and map through, just checking is difficult
      //Probably why people use search bars
    }
  
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value  // can't put stuff before e for some reason
    });
  };

  onChecker = e => { 
    this.setState({
      [e.target.name]: e.target.checked
    });
    let typeArr = this.state.typeWord;
    if(typeArr.includes(e.target.name) !== true){
      typeArr.push(e.target.name);
    };
    this.setState({
      typeWord: typeArr
    });
  };

  onSubmit = e => {
    
    this.props.onSubmit(this.state); // Pass back to parent
    e.preventDefault();
  };

  onReset = e => {
    this.setState({
      radius: "",
      typeWord: [],
      libraries: false,
      coffee: false,
      gyms: false, 
      attractions : false
    },this.onSubmit(e));
    this.props.onReset(e);  // This sets the state of keywords back to blanks
      // This clears all the places in Place.js
  }

  render() {
    return (
      
      <div>
          {/* <div className= "addy">
            <TextField
                id="name"
                label="Address"
                value={this.state.name}
                margin="normal"
              />
              <TextField
                id="name"
                label="City"
                value={this.state.name}
                margin="normal"
              />
              <TextField
                id="name"
                label="Country"
                value={this.state.name}
                margin="normal"
              />
          </div>  */}
      <div>

      <div className= "addy">
            <TextField
                name = "street"
                label="Address"
                value={this.state.name}
                onChange={e => this.change(e)}
                margin="normal"
              />
              <TextField
                name = "city"
                label="City"
                value={this.state.name}
                onChange={e => this.change(e)}
                margin="normal"
              />
          </div> 
        <FormControl />
        <fieldset>

          <legend> What are you looking for? </legend>
          <div >
            <Checkbox type="checkbox" id = "typeWord" 
            name= "libraries" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.libraries}/>
            <label htmlFor = "libraries"> Libraries</label>
          </div>
          <div >
            <Checkbox type="checkbox" id = "typeWord" 
            name= "gyms" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.gyms}/>
            <label htmlFor = "gyms"> Gyms</label>
          </div>
          <div >
          <Checkbox type="checkbox" id = "typeWord" 
            name= "attractions" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.attractions}/>
            <label htmlFor = "attractions"> Activities</label>
            </div>
        </fieldset>
        </FormControl>
      </div>
      
      <form >
        <br />
        <TextField
        className = "distance_input"
        name = "radius"   // name is parameter 
        type = "number"  max = "10"
        placeholder = "Distance in Miles" 
        value={this.state.radius}
        /* onChange={e => this.setState({name: e.target.value})}/> */
        onChange={e => this.change(e)}/>
        <br   />
        <Button variant="raised" color="primary"  onClick = {e => this.onSubmit(e)}>
        Submit
      </Button>
      </form>
      <button onClick = {e => this.onReset(e)}> Reset</button>
      </div>
    );
  }
}