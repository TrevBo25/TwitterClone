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
            <div>
                <h1>Register</h1>

                <div>

                    <span>Name</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'name')}} type="text" />

                    <span>Handle</span>
                    {
                        (this.state.emailInvalid)
                        ? <div>Email already exists!</div>
                        : <div></div>
                    }
                    <input onChange={(e) => {this.userInput(e.target.value, 'handle')}} type="text" />

                    <span>Email</span>
                    {
                        (this.state.handleInvalid)
                        ? <div>Handle already exists!</div>
                        : <div></div>
                    }
                    <span></span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'email')}} type="text" />
         
                    <span>Password</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'password')}} type="password" />

                    

                    <button onClick={() => this.submitRegistration(this.state)}>
                        Submit
                    </button>
                    
                    <span>{this.state.emailInvalid + ''}</span>
                    <span>{this.state.handleInvalid + ''}</span>
                </div>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state }
}



export default withRouter(connect(mapStateToProps, {updateUser})(Register));