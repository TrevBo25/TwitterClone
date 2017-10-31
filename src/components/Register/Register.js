import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            handle: '',
            email: '',
            password: '',
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
            console.log(response);
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
                    <input onChange={(e) => {this.userInput(e.target.value, 'handle')}} type="text" />

                    <span>Email</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'email')}} type="text" />
         
                    <span>Password</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'password')}} type="password" />

                    

                    <button onClick={() => this.submitRegistration(this.state)}>
                        Submit
                    </button>
                    
                </div>

            </div>
        );
    }
}

export default Register;