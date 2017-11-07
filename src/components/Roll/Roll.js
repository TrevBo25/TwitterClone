import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../ducks/reducer'
class Roll extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    updateView() {
        this.props.updatePageData({salmon: 'cheese'})
    }
    render() {
        console.log('The posts:', this.props.posts)
        return (
            <div>
                <ul className="postsholder">
                    {this.props.posts.map(function(post, i){
                        return (
                            <div key={i} className={`outterbox1`}>
                                <div className="toppart">
                                    <div className="avatarholder">
                                        <img alt="" src={post.avatar} />
                                    </div>
                                    <div className="names">
                                        <Link id="link" to={post.handle}><h1 className="name">{post.name}</h1></Link>
                                    <Link id="link" to={post.handle}><h3 className="handle">@{post.handle} | {post.post_time.slice(5, 10)}</h3></Link>
                                    </div>
                                    
                                </div>
                                <div className="middlepart">
                                    <div className="guts" >{post.guts} dsfasdfasdfasdfasdfasdfas</div>
                                </div>
                                <div className="bottompart">
                                    {post.image ? <div className="gutsimage">
                                        <img alt="" src={post.image} />
                                    </div> : null}
                                </div>
                            </div>
                            
                            // <div key={i} className="post">
                                
                            //     <div className="one">
                            //     <img className="avatar" src={post.avatar}/>
                            //     </div>
                            //     <div className="two">
                            //         <div className="title">
                            //           <Link id="link" to={post.handle}>{post.name} @{post.handle} {post.post_time}</Link>
                            //         </div>
                            //         <div>
                            //             <span>
                            //                 {post.guts}
                            //             </span>
                            //         </div>
                            //     </div>
                            //     {/* <h1></h1>
                            //     <Link to={post.handle}>{post.handle}</Link>
                            //     <img src={post.avatar}/>
                            //     <h3 key={i}>{post.guts}</h3>
                            //     <img src={post.image} />
                            //     <span>Likes: {post.likes + ""}</span>
                            //     <br/>
                            //     <span>Dislikes: {post.dislikes + ''}</span> */}
                            // </div>
                        )
                })}
                    
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