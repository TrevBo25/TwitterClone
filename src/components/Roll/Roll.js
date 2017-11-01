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
        axios.get('api/getposts').then((response) => {
            console.log('Getting posts... ', response.data)
            this.setState({posts: response.data})
        })
    }
    

    render() {
        // console.log(this.state.posts)
        return (
            <div>
                <ul>

                    {this.state.posts.map(function(post, i){
                        return (
                            <div className="post">
                                <h3 key={i}>{post.guts}</h3>
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