import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from './../Landing/Landing';
import Stream from './../Stream/Stream';

class Primary extends Component {
    render() {
        return (
            <div>
                <Landing />
            </div>
        );
    }
}

export default Primary;