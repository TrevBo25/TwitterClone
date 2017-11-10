import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from './../Landing/Landing';
import Stream from './../Stream/Stream';
import { updateUser, updatePageData } from '../../ducks/reducer';



class Primary extends Component {
    constructor(props){
        super(props)

        this.state = {
            render: false
        }
    }

    renderer(){
        this.setState({
            render: !this.state.render
        })
    }

    
    render() {
        console.log(this.props.user)
        console.log(this.props.match.params.handle)
        return (
            <div>
                <div>
                    {
                        (this.props.user.userData)
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