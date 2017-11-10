import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../../ducks/reducer'

class ProfileCard extends Component {
    render() {

        return (
            <div>
                {
                    (this.props.pageData.userData)
                    ? <div className="procard">
                        <div className="proavatarholder">
                            <img alt="" src={this.props.pageData.userData.avatar} className="proavatar" />
                        </div>
                        <div className="prowords">
                                <h1 className="proname">{this.props.pageData.userData.name}</h1>
                                <h1 className="prohandle">@{this.props.pageData.userData.handle}</h1>
                                <h1 className="probio"><i className="fa fa-map-marker" aria-hidden="true"></i>  {this.props.pageData.userData.location}</h1>
                                <p className="probio">{this.props.pageData.userData.bio}</p>
                        </div>
                    </div>
                    : <div>loading...</div>
                }
            </div>
            
        );
    }


}

function mapStateToProps( state ) {
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(ProfileCard);