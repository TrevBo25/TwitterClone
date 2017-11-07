import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../../ducks/reducer'

class IdentityCard extends Component {
    render() {

        return (
            <div>
                {
                    (this.props.pageData.userData)
                    ? <div>
                    <div className="identity-card">
                <div className="cover">
                    <img src={this.props.pageData.userData.cover} />
                </div>
                <div>
                    <div className="avatar">
                        <img src={this.props.pageData.userData.avatar} />
                        <div className="line">
                            <span id="name">{this.props.pageData.userData.name}</span>
                            <span>  {'@' + this.props.pageData.userData.handle}</span>
                        </div>
                    </div>
                    <div className="sime">

                        <div id="cosd">
                            <span>Followers</span>
                            <span>{this.props.pageData.followers.length}</span>
                        </div >

                        <div id="cosd">
                            <span>Following</span>
                            <span>{this.props.pageData.following.length}</span>
                        </div>

                        <div id="cosd">
                            <span>Posts</span>
                            <span>{this.props.pageData.posts.length}</span>
                        </div >


                    </div>
                </div>
            </div>
                    </div>
                    : <div>{this.props.user.handle}</div>
                }
            </div>
            
        );
    }


}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(IdentityCard);