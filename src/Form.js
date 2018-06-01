import React, { Component } from 'react';


export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      radius: "",
      typeWord: [],
      libraries: false,
      coffee: false,
      gyms: false, 
      attractions : false
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
     
      <div>
        <fieldset>
          <legend> What are you looking for? </legend>
          <div >
            <input type="checkbox" 
            name= "libraries" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.libraries}/>
            <label htmlFor = "libraries"> Libraries</label>
          </div>
          <div >
            <input type="checkbox" 
            name= "gyms" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.gyms}/>
            <label htmlFor = "gyms"> Gyms</label>
          </div>
          <div >
          <input type="checkbox" 
            name= "attractions" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.attractions}/>
            <label htmlFor = "attractions"> Activities</label>
            </div>
            <div >
          <input type="checkbox" 
            name= "attractions" 
            onChange={e => this.onChecker(e)}
            checked = {this.state.attractions}/>
            <label htmlFor = "attractions"> Activities</label>
            </div>
        </fieldset>
      </div>
      
      <form >
        <br />
        <input
        name = "radius"   // name is parameter 
        type = "number"  max = "10"
        placeholder = "Distance in Miles" 
        value={this.state.radius}
        /* onChange={e => this.setState({name: e.target.value})}/> */
        onChange={e => this.change(e)}/>
        <br   />
        <button onClick = {e => this.onSubmit(e)}>Submit</button>
      </form>
      <button onClick = {e => this.onReset(e)}> Reset</button>
      </div>
    );
  }
}