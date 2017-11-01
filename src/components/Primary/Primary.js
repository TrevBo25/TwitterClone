import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from './../Landing/Landing';
import Stream from './../Stream/Stream';
import { updateUser } from '../../ducks/reducer';

class Primary extends Component {
    render() {
        return (
            <div>
                Primary

                <div>
                    {
                        (this.props.user.handle)
                        ? <div><Stream /></div>
                        : <div><Landing /></div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user }
}



export default connect(mapStateToProps, {updateUser})(Primary);