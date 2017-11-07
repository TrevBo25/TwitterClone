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
                <div className="avatar">
                    <img src={this.props.pageData.userData.avatar} />
                    <div className="line">
                        <span id="name">{this.props.pageData.userData.name}</span>
                        <span id="handle">  {'@' + this.props.pageData.userData.handle}</span>
                    </div>
<<<<<<< HEAD
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
=======
                </div>
                <div className="sime">
>>>>>>> 7f54d604c6a5d6b059dc61be13136718d5cdb0f4

                    <div className="numberlabel">
                        <h1 className="actuallabel">Followers</h1>
                        <h1 className="number">{this.props.pageData.followers.length}</h1>
                    </div >

                    <div className="numberlabel">
                        <h1 className="actuallabel">Following</h1>
                        <h1 className="number">{this.props.pageData.following.length}</h1>
                    </div>

                    <div className="numberlabel">
                        <h1 className="actuallabel">Posts</h1>
                        <h1 className="number">0</h1>
                    </div >
                </div>
<<<<<<< HEAD
            </div>
=======
                {/* {this.props.pageData.name}
                {this.props.pageData.handle}
                <img src={this.props.pageData.cover} />
                <img src={this.props.pageData.avatar} />
                {this.props.pageData.bio}
                {this.props.pageData.location} */}
                </div>
>>>>>>> 7f54d604c6a5d6b059dc61be13136718d5cdb0f4
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