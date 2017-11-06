import React, { Component } from 'react';
import IdentityCard from './../Widgets/Identity/IdentityCard'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <IdentityCard/>
            </div>
        );
    }
}

export default Sidebar;