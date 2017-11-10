import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Nav/Nav';
import { goToSettings } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            email: '',
            newEmail: '',
            password: '',
            newPassword1: '',
            newPassword2: '',
            showUsername: false,
            showEmail: false,
            showPassword: false
            
          };
    
        this.userInput = this.userInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showUsername = this.showUsername.bind(this);
        this.showEmail = this.showEmail.bind(this);
        this.showPassword = this.showPassword.bind(this);
      }

      showUsername(e) {
          e.preventDefault();
          this.setState({showUsername: !this.state.showUsername})
      }
      showEmail(e) {
          e.preventDefault();
          this.setState({showEmail: !this.state.showEmail})
      }
      showPassword(e) {
          e.preventDefault();
          this.setState({showPassword: !this.state.showPassword})
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
  
              case 'newPassword1':
                  console.log('   Setting newPassword1 state:', input)
                  this.setState({newPassword1: input})
                  break;

              case 'newPassword2':
                  console.log('   Setting newPassword2 state:', input)
                  this.setState({newPassword2: input})
                  break;
          }
      }
    
      handleSubmit() {
        if(this.state.handle != ""){
            axios.post('/api/changehandle', {"id": this.props.user.id, "newHandle": this.state.handle})
            .then(response => {
                return "cool"
            })
        }
        if(this.state.email != "" && this.state.newEmail != ""){
            axios.post('/api/changeemail', {"id": this.props.user.id, "email": this.state.email, "newEmail": this.state.newEmail})
            .then( response => {
                return 'radical'
            })
        }
        if(this.state.password != "" && this.state.newPassword1 != "" && this.state.newPassword2 != ""){
            axios.post('/api/changepassword', {"id": this.props.user.id, "password": this.state.password, "newPass1": this.state.newPassword1, "newPass2": this.state.newPassword2})
            .then( response => {
                return 'tubular'
            })
        }
        // this.props.renderer()
       
      }
    
      render() {
        return (
            <div>
            <div className="settingsdad">
                <div className="settings-body">
                <div className="settings-form">

            <form onSubmit={this.handleSubmit}>
                {/* <button class="btn-group" onClick={this.showUsername}>Change Username</button>
                    <label style={{'display' : this.state.showUsername ? 'block' : 'none'}}> */}
                        <div className="input-field">
                            <h1>Change Handle</h1> 
                            <input type="text" placeholder="New Handle" onChange={(e) => {this.userInput(e.target.value, 'handle')}} />
                        </div>
                    {/* </label> */}

                        <div className="input-field">
                            <h1>Update Bio</h1>
                            <textarea rows="4" cols="50" wrap="hard" id="bio" placeholder="This is my bio!" onChange={(e) => {this.userInput(e.target.value, 'bio')}} />
                        </div>

                        <div className="input-field">
                            <h1>Change Location</h1> 
                            <input type="text" placeholder="New Handle" onChange={(e) => {this.userInput(e.target.value, 'location')}} />
                        </div>

                    {/* <hr className="cool-line" /> */}

                {/* <button class="btn-group" onClick={this.showEmail}>Change Email</button>
                    <label style={{'display' : this.state.showEmail ? 'block' : 'none'}} > */}
                        <div className="input-field">
                            <h1>Update Email</h1> 
                            <input type="text" placeholder="Current Email" onChange={(e) => {this.userInput(e.target.value, 'email')}} />
                        {/* </label> */}
                        {/* <label style={{'display' : this.state.showEmail ? 'block' : 'none'}}> */}
                        <div>
                            <input type="text" placeholder="New Email" onChange={(e) => {this.userInput(e.target.value, 'newEmail')}} />
                        </div>
                        {/* </label> */}
                        </div>

                    {/* <hr className="cool-line" /> */}
                    
                {/* <button class="btn-group" onClick={this.showPassword}>Change Password</button> */}
                    {/* <label style={{'display' : this.state.showPassword ? 'block' : 'none'}}> */}
                    <div className="input-field">
                        <h1>Change Password</h1> 
                        <input type="password" placeholder="Current Password" onChange={(e) => {this.userInput(e.target.value, 'password')}} />
                    {/* </label> */}
                    {/* <label style={{'display' : this.state.showPassword ? 'block' : 'none'}}> */}
                    <div>
                        <input type="password" placeholder="New Password" onChange={(e) => {this.userInput(e.target.value, 'newPassword1')}} />
                    </div>
                        {/* </label> */}
                    {/* <label style={{'display' : this.state.showPassword ? 'block' : 'none'}}> */}
                        <input type="password" placeholder="Repeat New Password" onChange={(e) => {this.userInput(e.target.value, 'newPassword2')}} />
                    {/* </label> */}
                    </div>

                <Link to="/"><input class="btn-group" id="save" type="submit" value="Save" onClick={this.handleSubmit}/></Link>

                </form>
                </div>
             </div>
           </div>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    console.log(state)
    return {user: state.user, showSettings: state.showSettings}
}

export default connect(mapStateToProps, goToSettings)(Settings);