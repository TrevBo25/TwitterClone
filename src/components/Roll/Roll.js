import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../ducks/reducer'

class Roll extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            render: false
        }
    }
    componentWillMount() {
        this.choose()
    }

    choose(){
        if(this.props.profile) {
            this.setState({
                posts: this.props.pageData.posts
            })
        } else {
            axios.post('/api/fposts', {"id": this.props.user.userData.id})
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
        }
    }

    like(id){
        console.log(id);
        axios.post('/api/likepost', {"id": id})
        .then( response => {
            return 'liked'
        }).catch( err => console.log('likepost', err))
    }

    dislike(id){
        axios.post('/api/dislikepost', {"id": id})
        .then( response => {
            return 'disliked'
        }).catch( err => console.log('dislikepost', err))
    }
    
    render() {
        console.log('The posts:', this.state.posts)
        return (
            <div>
                <ul className="postsholders">
                {this.state.posts.map((post, i) => {
        return (
            <div key={i} className="out">
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
                    <div className="guts" >{post.guts}</div>
                </div>
                <div className="bottompart">
                    {post.image ? <div className="gutsimage">
                        <img alt="" src={post.image} />
                    </div> : <div></div>}
                </div>
                <div className="votebuttons">
                    <div className="likebutton">
                        <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true" onClick={() => this.like(post.id)}></i><p className="votenum">{post.likes}</p>
                    </div>
                    <div className="likebutton">
                        <i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true" onClick={() => this.dislike(post.id)}></i><p className="votenum">{post.dislikes}</p>
                    </div>
                </div>
            </div>
        )
    })}  
                </ul>
            </div>
        );
    }
}
function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData, profile: state.profile  }
}
export default connect(mapStateToProps, {updateUser, updatePageData})(Roll);