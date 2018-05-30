import React, { Component } from 'react';


export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      radius: "",
      type: ""
    };

    }
  
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state); // Pass back to parent
  };
  render() {
    return (
      <div>
      <div>
        <fieldset /*onClick = {console.log(this.state)}*/>
          <legend> What are you looking for? </legend>
          <div >
            <input type="checkbox" id="libraries" 
            name="type" value= "libraries" 
            onChange = {e => this.change(e)} />
            <label htmlFor = "libraries"> Libraries</label>
          </div>
          <div>
            <input type="checkbox" id="gyms" 
            name="type" value= "gyms"
            onChange = {e => this.change(e)} />
            <label htmlFor = "gyms"> Gyms</label>gi
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
      </div>
    );
  }
}