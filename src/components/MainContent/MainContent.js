import React, { Component } from 'react';
import { connect } from 'react-redux';
import Roll from './../Roll/Roll'
import Compose from './../Compose/Compose'
import { updateUser, viewProfile } from '../../ducks/reducer';
import Settings from "../Settings/Settings"

import axios from 'axios';
import { Link } from 'react-router-dom';

class MainContent extends Component {
    constructor() {
        super()

        this.state = {
            posts:[]
        }

        this.getPosts = this.getPosts.bind(this);
    }
    
    componentWillMount(){
        this.props.viewProfile(false);
    }

    getPosts() {
        axios.get('api/getposts', 'peter').then((response) => {
            console.log('Getting posts... ', response)
            this.setState({posts: response.data})
        })
    }

    
    render() {

        return (
            <div className="main-content">

                <Compose getPosts={this.getPosts}/>
                <Link to={this.props.user.handle}
                >{this.props.user.handle}
                </Link>
                {!this.props.showSettings ?
                <Roll /> :
                <Settings />}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, showSettings: state.showSettings}
}

export default connect(mapStateToProps, {updateUser, viewProfile})(MainContent);