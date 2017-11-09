import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updatePageData, viewProfile, changeProView } from '../../ducks/reducer';
import Nav from '../Nav/Nav';
import Roll from '../Roll/Roll';
import Sidebar from '../Sidebar/Sidebar';
import FollowersComp from '../FollowComp/FollowersComp';
import FollowingComp from '../FollowComp/FollowingComp';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }

    componentDidMount(){
        this.doItBrother();
    }

    // componentWillReceiveProps(props){
    //     this.doItBrother();
    // }


    changeProfileView(view){
        this.props.changeProView(view);
    }

    doItBrother(){
        if(this.props.match) {
            this.props.updatePageData(this.props.match.params.handle)
        }
        this.props.viewProfile(true);
    }

    render() {
        return (
            <div className="profiledad">
                
                {this.props.pageData.userData ? 
                <div className="papaa" >
                    <div>
                        <Nav />
                    </div>  
                    <div className="topp">
                        <img alt="" src={this.props.pageData.userData.cover} className="coverimg" />
                    </div>
                    <div className="bottombar">
                        <div className="holderthing">
                            <div className={this.props.profileView === "roll" ? "postsselected" : "posts"} onClick={() => this.changeProfileView("roll")}>
                                <h1 className="poststitle">Talkos</h1>
                                <h1 className="postsnumber">{this.props.pageData.posts.length}</h1>
                            </div>
                            <div className={this.props.profileView === "following" ? "postsselected" : "posts"} onClick={() => this.changeProfileView("following")}>
                                <h1 className="poststitle">Following</h1>
                                <h1 className="postsnumber">{this.props.pageData.following.length}</h1>
                            </div>
                            <div className={this.props.profileView === "followers" ? "postsselected" : "posts"} onClick={() => this.changeProfileView("followers")}>
                                <h1 className="poststitle">Followers</h1>
                                <h1 className="postsnumber">{this.props.pageData.followers.length}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="frame">
                        <Sidebar />
                        <div className="main-contentp">
                            {this.props.profileView === "roll" ? <Roll /> : (this.props.profileView === "following" ? <FollowingComp /> : <FollowersComp />)}
                        </div>
                    </div>
                </div>
                : <div>loading...</div>}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user, 
        pageData: state.pageData,
        profileView: state.profileView
    }
}

export default connect(mapStateToProps, {updatePageData, viewProfile, changeProView})(Profile);