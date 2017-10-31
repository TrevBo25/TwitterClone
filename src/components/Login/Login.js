import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            handle: '',
            password: ''
        }
    }

    userInput = (input, type) => {
        console.log('user input function:');
        switch(type) {
            
            case 'handle':
                console.log('   Setting handle state:', input)
                this.setState({handle: input})
                break;

            case 'password':
            console.log('   Setting password state:', input)
                this.setState({password: input})
            
        }
    }

    submitLogin = (userSubmission) => {
        console.log( 'Submitting login with current state: ', userSubmission )
        axios.post('/api/login', userSubmission ).then((response) => {
            console.log(response);
        })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>

                <div>

                    <span>Email or Handle</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'handle')}} type="text" />

                    <span>Password</span>
                    <input onChange={(e) => {this.userInput(e.target.value, 'password')}} type="password" />

                    <button onClick={() => this.submitLogin(this.state)}>
                        Submit
                    </button>
                    
                </div>

            </div>
        );
    }
}

export default Login;