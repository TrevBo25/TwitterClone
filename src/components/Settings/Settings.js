import React, { Component } from 'react';
import axios from 'axios';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            email: '',
            newEmail: '',
            password: '',
            newPassword: ''
          };
    
        this.userInput = this.userInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      userInput(input, type) {
          console.log('User input function:');
          switch(type) {
              
              case 'handle':
                  console.log('   Setting handle state:', input)
                  this.setState({handle: input})
                  break;
  
              case 'email':
                  console.log('   Setting email state:', input)
                  this.setState({email: input})
                  break;
  
              case 'newEmail':
                  console.log('   Setting newEmail state:', input)
                  this.setState({newEmail: input})
                  break;
              
              case 'password':
                  console.log('   Setting password state:', input)
                  this.setState({password: input})
                  break;
  
              case 'newPassword':
                  console.log('   Setting newPassword state:', input)
                  this.setState({newPassword: input})
                  break;
          }
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          
          <form onSubmit={this.handleSubmit}>
            <label>
              New Username:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'handle')}} />
            </label>
            <br />
            <label>
              Current Email:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'email')}} />
            </label>
            <br />
             <label>
              New Email:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'newEmail')}} />
            </label>
            <br />
            <label>
              Current Password:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'password')}} />
            </label>
            <br />
            <label>
              New Password:
              <input type="text" onChange={(e) => {this.userInput(e.target.value, 'newPassword')}} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
      );
    }
  }