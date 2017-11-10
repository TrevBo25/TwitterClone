import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../ducks/reducer';

class FollowersComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            render: false
        }

        this.rendererer = this.rendererer.bind(this)
    }

    
    componentWillMount() {
        this.doItBrotherAgain();    
    }

    componentWillReceiveProps(nextProps){
        this.doItBrotherAgain();
    }

    doItBrotherAgain(){
        this.setState({
            users: this.props.pageData.followers
        })      
    }

    rendererer(){
        this.setState({
            render: !this.state.render
        },this.doItBrotherAgain);
        this.props.renderer()
    }

    follow(id){
        axios.post('/api/follow', {"id": this.props.user.userData.id, "otherid": id})
        .then( response => {
            return "Followed!"
        })
    }

    unfollow(id){
        axios.post('/api/unfollow', {"id": this.props.user.userData.id, "otherid": id})
        .then( response => {
            return "Unfollowed!"
        })
    }


    render() {
        return (
            <div className="followcardholders">
                {console.log('users', this.state.users)}
                {this.state.users.map((e, i, a) => {
                    return (
                        <div key={i} className="fcardholder">
                            <div>
                                <div>
                                    <div className="follow-card">
                                        <div className="fcover">
                                            <img src={e.cover} />
                                        </div>
                                        <div className="favatar">
                                            <img src={e.avatar} />
                                            <div className="fline">
                                                <p id="name" onClick={() => this.rendererer()}><Link id="link" to={e.handle}>{e.name}</Link></p>
                                                <p id="handle" onClick={() => this.rendererer()}><Link id="link" to={e.handle}>  {'@' + e.handle}</Link></p>
                                            </div>
                                        </div>
                                        <div className="fsime">
                                            <div>
                                                <h1 className="fbio">{e.bio}</h1>
                                            </div>
                                          <div className="followbutton" onClick={() => this.follow(e.id)}>Follow</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}  
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { user: state.user, pageData: state.pageData, profile: state.profile, profileView: state.profileView  }
}
export default connect(mapStateToProps, {updateUser, updatePageData})(FollowersComp);