import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';



import Login from './../Login/Login';
import Register from './../Register/Register';




class Landing extends Component {
    
    
    constructor() {
        super();
    
        this.state = {
            type: "none",
            posts: []
        }
        this.registerStart = this.registerStart.bind(this);
        this.loginStart = this.loginStart.bind(this);
        this.selectStart = this.selectStart.bind(this);
    }

    componentWillMount(){
        axios.get('http://localhost:8008/api/getposts')
        .then( response => {
        console.log(response.data)
        this.setState({
            posts: response.data
        })
        }).catch(err => console.log(err))
    }

    registerStart(){
        this.setState({
            type: "register"
        })
    }

    loginStart(){
        this.setState({
            type: "login"
        })
    }

    selectStart(){
        this.setState({
            type: "none"
        })
    }

    


    // axios.get('http://localhost:8008/api/getposts')
    // .then( response => {
    //     console.log(response.data)
    // }).catch(err => console.log(err))


    render() {
        console.log(this.state.posts);
        var boxType = 9;
        var pmap = [];
        {this.state.posts != [] ? pmap = this.state.posts.map((e, i, a) => {
            var id = boxType%9;
            boxType++;
            
            return (
                <div key={i} className={`outterbox${id}`}>
                    <div className="toppart">
                        <div className="avatarholder">
                            <img alt="" src={e.avatar} />
                        </div>
                        <div className="names">
                            <h1 className="name">{e.name}</h1>
                            <h3 className="handle">@{e.handle}</h3>
                        </div>
                    </div>
                    <div className="bottompart">
                        <div className={e.image != "picture hsdfsfdfsere" ? "guts" : "gutsnoimage"} >09876543210987654321098765432109876543210987654321098765432109876543210987654321</div>
                        {e.image ? <div className="gutsimage">
                            <img alt="" src={e.image} />
                        </div> : null}
                    </div>
                </div>
            )
        }) : []}
        return (
            
            <div className="papa">
                <div className="postsholder">
                    {pmap ? pmap : null}
                </div>

                {this.state.type === "none" ? 
                <div className="fixedbox">
                    <div className="wordsholder">
                        <h1 className="title">Welcome to TALKO!</h1>
                        <h3 className="subtitle">Please Login or Register below.</h3>
                    </div>
                    <div className="buttonsholder">
                        <div className="registerbutton" onClick={this.registerStart}><p>Register</p></div>
                        <div className="loginbutton" onClick={this.loginStart}><p>Log In</p></div>
                    </div>
                </div>
                 : null}

                {this.state.type === "login" ?
                <div className="loginbox">
                    <Login />
                    <div className="gobackbutton" onClick={this.selectStart}><h1>Go Back</h1></div>
                </div> : null}

                {this.state.type === "register" ?
                <div className="registerbox">
                    <Register />
                    <div className="gobackbutton" onClick={this.selectStart}><h1>Go Back</h1></div>
                </div> : null}

            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user }
}

export default (Landing);

{/* <h1>Landing Page</h1>

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


                    </div> */}