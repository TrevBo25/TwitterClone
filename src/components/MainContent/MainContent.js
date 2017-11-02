import React, { Component } from 'react';
import Roll from './../Roll/Roll'
import Compose from './../Compose/Compose'
import axios from 'axios';

class MainContent extends Component {
    constructor() {
        super()

        this.state = {
            posts:[]
        }

        this.getPosts = this.getPosts.bind(this);
    }

    getPosts() {
        axios.get('api/getposts').then((response) => {
            console.log('Getting posts... ', response.data)
            this.setState({posts: response.data})
        })
    }
    render() {
        return (
            <div className="main-content">
                Main Content
                <Compose getPosts={this.getPosts}/>
                <Roll getPosts={this.getPosts} posts={this.state.posts}  getp/>
            </div>
        );
    }
}

export default MainContent;