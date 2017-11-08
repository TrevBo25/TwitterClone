import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../../ducks/reducer';
import { Link } from 'react-router-dom';

class IdentityCard extends Component {
    render() {

        return (
            <div>
                {
                    (this.props.user)
                    ? <div>
                    <div className="identity-card">
                <div className="cover">
                    <img src={this.props.user.cover} />
                </div>
                <div className="avatar">
                    <img src={this.props.user.avatar} />
                    <div className="line">
                        <span id="name"><Link id="link" to={this.props.user.handle}>{this.props.user.name}</Link></span>
                        <span id="handle">  <Link id="link" to={this.props.user.handle}>{'@' + this.props.user.handle}</Link></span>
                    </div>
                </div>
                <div className="sime">

                    <div className="numberlabel">
                        <h1 className="actuallabel">Followers</h1>
                        <h1 className="number">{0}</h1>
                    </div >

                    <div className="numberlabel">
                        <h1 className="actuallabel">Following</h1>
                        <h1 className="number">{0}</h1>
                    </div>

                    <div className="numberlabel">
                        <h1 className="actuallabel">Posts</h1>
                        <h1 className="number">0</h1>
                    </div >
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