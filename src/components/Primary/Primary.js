import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from './../Landing/Landing';
import Stream from './../Stream/Stream';
import { updateUser, updatePageData } from '../../ducks/reducer';



class Primary extends Component {


    
    render() {
        console.log(this.props.pageData)
        console.log(this.props.match.params.handle)
        return (
            <div>
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
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(Primary);