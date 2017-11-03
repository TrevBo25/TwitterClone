import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                
                this is the nav
                <img src={this.props.user.avatar} />
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user }
}

export default connect(mapStateToProps, {updateUser})(Nav);