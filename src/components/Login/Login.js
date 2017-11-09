import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer'

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

            default:
                console.log('error')
            
        }
    }

    submitLogin = (userSubmission) => {
        console.log( 'Submitting login with current state: ', userSubmission )
        axios.post('/api/login', userSubmission ).then((response) => {

            console.log(response);
            this.props.updateUser(response.data[0]);
            console.log('User state updated!',this.props.user)
            // this.props.history.push("/");
        })
    }
    render() {
        return (
            <div className="bigbox">
                <h1 className="logintitle">Login</h1>

                <div className="loginotherbox">

                    <input onChange={(e) => {this.userInput(e.target.value, 'handle')}} type="text" className="logininput" placeholder="Handle or Email"/>

                    <input onChange={(e) => {this.userInput(e.target.value, 'password')}} type="password" className="logininput" placeholder="Password"/>

                    <button onClick={() => this.submitLogin(this.state)} className="loginsubmit">Submit</button>
                    
                </div>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state }
}



export default withRouter(connect(mapStateToProps, {updateUser})(Login));