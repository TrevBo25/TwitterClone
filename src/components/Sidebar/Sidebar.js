import React, { Component } from 'react';
import IdentityCard from './../Widgets/Identity/IdentityCard';
import { connect } from 'react-redux';
import ProfileCard from '../Widgets/Identity/ProfileCard';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {!this.props.profile ? <IdentityCard/> : <ProfileCard />}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { profile: state.profile  }
}

export default connect(mapStateToProps)(Sidebar);