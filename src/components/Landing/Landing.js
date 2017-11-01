import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



import Login from './../Login/Login'




class Landing extends Component {
    
    
    constructor() {
        super();
    
        this.state = {
            loginRender: false
        }
    }
    loginPopUp() {
        // console.log('login  popup function')
        this.setState({loginRender: !this.state.loginRender})
    }

    render() {
        return (
            
            <div>

                <h1>Landing Page</h1>

                <div>
  
                        <button onClick={() => {this.loginPopUp()}}>Login</button>

                        <button>
                            <Link to="/register">Register</Link>
                        </button>

                </div>

                <div>
                    
                    {
                        (this.state.loginRender)
                        ? <div><Login /></div>
                        : <div></div>

                    }
                </div>

                    <div>


                    </div>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user }
}



export default (Landing);