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
        }

        this.refresh = this.refresh.bind(this)
    }

    
    componentWillMount() {
            this.setState({
                users: this.props.pageData.followers
            })
    }

    refresh(){
        window.location.reload();
    }

    render() {
        return (
            <div className="followcardholders">
                {console.log('users', this.state.users)}
                {this.state.users.map(function(e, i, a){
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
                                                <p id="name"><Link id="link" to={e.handle}>{e.name}</Link></p>
                                                <p id="handle"><Link id="link" to={e.handle}>  {'@' + e.handle}</Link></p>
                                            </div>
                                        </div>
                                        <div className="fsime">
                                            <div>
                                                <h1 className="fbio">{e.bio}</h1>
                                            </div>
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