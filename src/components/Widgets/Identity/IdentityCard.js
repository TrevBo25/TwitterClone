import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './../../../ducks/reducer'

class IdentityCard extends Component {
    render() {
        return (
            <div className="IdentityCard">
                IdentityCard
                {this.props.user.name}
                {this.props.user.handle}
                <img src={this.props.user.cover} />
                <img src={this.props.user.avatar} />
                {this.props.user.bio}
                {this.props.user.location}
            </div>
        );
    }


}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user }
}

export default connect(mapStateToProps, {updateUser})(IdentityCard);