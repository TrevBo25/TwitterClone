import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../ducks/reducer'


class Roll extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    
    render() {
            
        console.log('The posts:', this.props.posts)
        return (
            <div>
                <ul>
                    test
                    {
                        (this.props.pageData.posts)
                        ? <div>{this.props.pageData.posts.map(function(post, i){
                            console.log(post)
                        return (
                            <div key={i} className="post">
                                
                                <div className="one">
                                <img className="avatar" src={post.avatar}/>
                                </div>

                                <div className="two">
                                    <div className="title">
                                      <Link id="link" to={post.handle}>{post.name} @{post.handle} {post.post_time}</Link>
                                    </div>
                                    <div>
                                        <span>
                                            {post.guts}
                                        </span>
                                    </div>
                                </div>
                       
                            </div>
                        )
                })}</div>
                        : <div>

                        </div>
                    }
{/* 
                    {this.props.posts.map(function(post, i){
                        return (
                            <div key={i} className="post">
                                
                                <div className="one">
                                <img className="avatar" src={post.avatar}/>
                                </div>

                                <div className="two">
                                    <div className="title">
                                      <Link id="link" to={post.handle}>{post.name} @{post.handle} {post.post_time}</Link>
                                    </div>
                                    <div>
                                        <span>
                                            {post.guts}
                                        </span>
                                    </div>
                                </div>
                       
                            </div>
                        )
                })} */}
                    

                </ul>
                <div>
                <h1></h1>

                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(Roll);