import React, { Component } from 'react';
import { connect } from 'react-redux';
import Roll from './../Roll/Roll'
import Compose from './../Compose/Compose'
import { updateUser } from '../../ducks/reducer';

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
    

    getPosts() {
        
        if(this.props.user){
            console.log('viewing current user')
            axios.post('api/getposts', {handle:this.props.user.handle}).then((response) => {
                console.log('Getting posts... ', response)
                this.setState({posts: response.data})
            })

        }

        }
    
    render() {

        return (
            <div className="main-content">

                <Compose getPosts={this.getPosts}/>
                <Link to={this.props.user.handle}
                >{this.props.user.handle}
                </Link>
                <Roll getPosts={this.getPosts} posts={this.state.posts} />
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user}
}

export default connect(mapStateToProps, {updateUser})(MainContent);