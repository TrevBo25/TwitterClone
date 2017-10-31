import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <a>
                        <button onClick={() => {this.loginPopUp()}}>Login</button>
                    </a>
                    <a>
                        <button>
                            <Link to="/register">Register</Link>
                        </button>
                    </a>
                </div>

                <div>
                    
                    {this.state.loginRender}
                    {
                        (this.state.loginRender)
                        ? <div><Login /></div>
                        : <div></div>

                    }
                </div>

            </div>
        );
    }
}

export default Landing;