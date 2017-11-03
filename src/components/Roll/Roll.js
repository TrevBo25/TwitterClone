import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Roll extends Component {

    componentDidMount() {
        this.props.getPosts();
    }


//link href=`/${post.id}`
    render() {
        console.log('The posts:', this.props.posts)
        return (
            <div>
                <ul>

                    {this.props.posts.map(function(post, i){
                        return (
                            <div key={i} className="post">
                                <h1></h1>
                                <Link to={post.handle}>{post.handle}</Link>
                                <img src={post.avatar}/>
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