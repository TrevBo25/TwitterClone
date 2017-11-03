import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, updatePageData } from './../../../ducks/reducer'

class IdentityCard extends Component {
    render() {
        return (
            <div className="IdentityCard">
                IdentityCard
                {this.props.pageData.name}
                {this.props.pageData.handle}
                <img src={this.props.pageData.cover} />
                <img src={this.props.pageData.avatar} />
                {this.props.pageData.bio}
                {this.props.pageData.location}
            </div>
        );
    }


}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(IdentityCard);