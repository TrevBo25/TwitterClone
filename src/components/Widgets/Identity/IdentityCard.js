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
                </div>
                <div className="sime">

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
                {/* {this.props.pageData.name}
                {this.props.pageData.handle}
                <img src={this.props.pageData.cover} />
                <img src={this.props.pageData.avatar} />
                {this.props.pageData.bio}
                {this.props.pageData.location} */}
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