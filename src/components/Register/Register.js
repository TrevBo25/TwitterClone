import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'
 
class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            handle: '',
            email: '',
            password: '',
            emailInvalid: false,
            handleInvalid: false
        }
    }

    userInput = (input, type) => {
        console.log('User input function:');
        switch(type) {
            
            case 'name':
                console.log('   Setting name state:', input)
                this.setState({name: input})
                break;

            case 'handle':
                console.log('   Setting handle state:', input)
                this.setState({handle: input})
                break;

            case 'email':
                console.log('   Setting email state:', input)
                this.setState({email: input})
                break;
            
            case 'password':
                console.log('   Setting password state:', input)
                this.setState({password: input})
                break;
        }
    }

    submitRegistration = (userSubmission) => {
        console.log( 'Submitting registration with current state: ', userSubmission )
        axios.post('/api/register', userSubmission ).then((response) => {
            console.log(response.data);

            switch(response.data) {
                case "Email already exists":
                    console.log('Email already exists');
                    this.setState({emailInvalid: true});
                    break;
                case "Handle already exists":
                    console.log('handle already exists');
                    this.setState({handleInvalid: true});
                    break;
                default:
                    console.log('creating user...');
                    this.props.updateUser(response.data);
                    console.log('User state updated!',this.props.user)
                    this.props.history.push("/");
            }
        })
    }

    render() {
        return (
            <div className="registerbigbox">
                <div className="registerwords">
                    <h1 className="registertitle">Introducing TALKO!</h1>
                    <h4 className="registersubtitle">Let's give 'em something to TALKO 'bout!</h4>
                </div>

                <div className="registerotherbox">

                    <h3 className="registerinputtitle">Join TALKO today!</h3>

                    <input className="registerinput" onChange={(e) => {this.userInput(e.target.value, 'name')}} type="text" placeholder="Enter your name"/>

                    {
                        (this.state.emailInvalid)
                        ? <div>Email already exists!</div>
                        : <div></div>
                    }
                    <input className="registerinput" onChange={(e) => {this.userInput(e.target.value, 'handle')}} type="text" placeholder="Choose a handle"/>

                    {
                        (this.state.handleInvalid)
                        ? <div>Handle already exists!</div>
                        : <div></div>
                    }
                    <span></span>
                    <input className="registerinput" onChange={(e) => {this.userInput(e.target.value, 'email')}} type="text" placeholder="Enter your email"/>
         
                    <input className="registerinput" onChange={(e) => {this.userInput(e.target.value, 'password')}} type="password" placeholder="Create a password"/>

                    

                    <button className="registersubmit" onClick={() => this.submitRegistration(this.state)}>Submit</button>
                    
                    {/* <span>{this.state.emailInvalid + ''}</span>
                    <span>{this.state.handleInvalid + ''}</span> */}
                </div>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state }
}



export default withRouter(connect(mapStateToProps, {updateUser})(Register));