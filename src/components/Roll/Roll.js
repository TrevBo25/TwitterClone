import React, { Component } from 'react';
import axios from 'axios';



class Roll extends Component {
    constructor() {
        super()

        this.state = {
            posts:[]
        }

    }
    componentDidMount() {
        this.props.getPosts();
    }



    render() {
        console.log('zzzz', this.props.posts)
        return (
            <div>
                <ul>

                    {this.props.posts.map(function(post, i){
                        return (
                            <div key={i} className="post">
                                <h3 key={i}>{post.guts}</h3>
                                <img src={post.image} />
                                <span>Likes: {post.likes + ""}</span>
                                <br/>
                                <span>Dislikes: {post.dislikes + ''}</span>
                            </div>
                        )
                })}
                    

                </ul>
            </div>
        );
    }
}

export default Roll;