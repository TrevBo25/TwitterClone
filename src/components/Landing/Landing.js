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
            posts: [
                {
                    "id": 66,
                    "guts": "or do you...",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "bruce",
                    "image": "http://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:57:08.184Z",
                    "user_id": 66,
                    "name": "spiderman",
                    "handle": "peter",
                    "email": "peter@parker.com",
                    "password": "maryjane",
                    "avatar": "https://i.pinimg.com/736x/1a/50/65/1a50655c5e33b6a680aeafcb55bb3fed--black-spider-spider-man.jpg",
                    "bio": "bit by a spider",
                    "location": "forest hills, NY",
                    "cover": "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/smhldn9-1024x695.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "sullii",
                    "image": "http://www.animationmagazine.net/wordpress/wp-content/uploads/PopTartCatDraft.png",
                    "category": "tech",
                    "tagged_user": "clark",
                    "post_time": "2017-11-03T04:53:41.390Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 1,
                    "dislikes": 3,
                    "repost": "johnj",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:52:06.789Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 5,
                    "dislikes": 23,
                    "repost": "terminator",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "peter",
                    "post_time": "2017-11-03T04:47:47.570Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 25,
                    "dislikes": 3,
                    "repost": "peter",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "terminator",
                    "post_time": "2017-11-03T04:47:16.216Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                },
                {
                    "id": 66,
                    "guts": "or do you...",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "bruce",
                    "image": "http://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:57:08.184Z",
                    "user_id": 66,
                    "name": "spiderman",
                    "handle": "peter",
                    "email": "peter@parker.com",
                    "password": "maryjane",
                    "avatar": "https://i.pinimg.com/736x/1a/50/65/1a50655c5e33b6a680aeafcb55bb3fed--black-spider-spider-man.jpg",
                    "bio": "bit by a spider",
                    "location": "forest hills, NY",
                    "cover": "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/smhldn9-1024x695.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "sullii",
                    "image": "http://www.animationmagazine.net/wordpress/wp-content/uploads/PopTartCatDraft.png",
                    "category": "tech",
                    "tagged_user": "clark",
                    "post_time": "2017-11-03T04:53:41.390Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 1,
                    "dislikes": 3,
                    "repost": "johnj",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:52:06.789Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 5,
                    "dislikes": 23,
                    "repost": "terminator",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "peter",
                    "post_time": "2017-11-03T04:47:47.570Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 25,
                    "dislikes": 3,
                    "repost": "peter",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "terminator",
                    "post_time": "2017-11-03T04:47:16.216Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                },
                {
                    "id": 66,
                    "guts": "or do you...",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "bruce",
                    "image": "http://cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:57:08.184Z",
                    "user_id": 66,
                    "name": "spiderman",
                    "handle": "peter",
                    "email": "peter@parker.com",
                    "password": "maryjane",
                    "avatar": "https://i.pinimg.com/736x/1a/50/65/1a50655c5e33b6a680aeafcb55bb3fed--black-spider-spider-man.jpg",
                    "bio": "bit by a spider",
                    "location": "forest hills, NY",
                    "cover": "https://cdn.theculturetrip.com/wp-content/uploads/2017/06/smhldn9-1024x695.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 11,
                    "dislikes": 3,
                    "repost": "sullii",
                    "image": "http://www.animationmagazine.net/wordpress/wp-content/uploads/PopTartCatDraft.png",
                    "category": "tech",
                    "tagged_user": "clark",
                    "post_time": "2017-11-03T04:53:41.390Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 64,
                    "guts": "\"Lorem ipsum more fake news..blah blah blah,",
                    "likes": 1,
                    "dislikes": 3,
                    "repost": "johnj",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "sullii",
                    "post_time": "2017-11-03T04:52:06.789Z",
                    "user_id": 64,
                    "name": "arnold",
                    "handle": "terminator",
                    "email": "arnold@terminator.com",
                    "password": "cyberdyne",
                    "avatar": "https://www.sideshowtoy.com/photo_902662_thumb.jpg",
                    "bio": "I am here to both save and kill john conner",
                    "location": "future",
                    "cover": "https://static.rogerebert.com/uploads/review/primary_image/reviews/terminator-2-judgment-day-3d-2017/hero_Terminator-2-Judgment-Day-3D.jpg"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 5,
                    "dislikes": 23,
                    "repost": "terminator",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "peter",
                    "post_time": "2017-11-03T04:47:47.570Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                },
                {
                    "id": 68,
                    "guts": "\"Lorem ipsum more fake news.. consectetur adipiscing elit,",
                    "likes": 25,
                    "dislikes": 3,
                    "repost": "peter",
                    "image": "https://www.avrahamadler.com/wp-content/uploads/2013/08/icon1.png",
                    "category": "tech",
                    "tagged_user": "terminator",
                    "post_time": "2017-11-03T04:47:16.216Z",
                    "user_id": 68,
                    "name": "superman",
                    "handle": "clark",
                    "email": "clark@kent.com",
                    "password": "lois",
                    "avatar": "https://s-media-cache-ak0.pinimg.com/236x/b2/d7/73/b2d7733f586b8d56d2e48e30978f341b--batman-fan-art-superman-artwork.jpg",
                    "bio": "faster than a speeding bullet",
                    "location": "metropolis",
                    "cover": "http://batmangothamcity.net/wp-content/uploads/2013/08/smallville-metropolis.png"
                }
            ]
        }
        this.registerStart = this.registerStart.bind(this);
        this.loginStart = this.loginStart.bind(this);
        this.selectStart = this.selectStart.bind(this);
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
        var pmap = this.state.posts.map((e, i, a) => {
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
                        <div className="guts">09876543210987654321098765432109876543210987654321098765432109876543210987654321</div>
                        {e.image ? <div className="gutsimage">
                            <img alt="" src={e.image} />
                        </div> : null}
                    </div>
                </div>
            )
        })
        return (
            
            <div className="papa">
                <div className="postsholder">
                    {pmap}
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