import React, { Component } from 'react';


export default class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      contractDetails: ''};

    }
  
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  onSubmit = e => {
    console.log(this.state);
    this.props.onSubmit(this.state);
    e.preventDefault();
    this.setState({
      name: "",
      company: "",
      contractDetails: ""
    })
  }
  render() {
    return (
      <div>
      <form >
        <br />
        <input
        name = "name"   // name is parameter 
        placeholder = "Name" 
        value={this.state.name}
        /* onChange={e => this.setState({name: e.target.value})}/> */
        onChange={e => this.change(e)}/>
        

        <br   />
        <input placeholder = "Company" 
        name = 'company'
        value={this.state.company}
        onChange={e => this.change(e)}/>
        

        <br />
        <input placeholder = "Contract" 
        name = 'contractDetails'  
        value={this.state.contractDetails}
        onChange={e => this.change(e)}/>
        <br />
        <button onClick = {e => this.onSubmit(e)}>Submit</button>
      </form>

      </div>
    );
  }
}