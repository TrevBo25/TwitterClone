import React, { Component } from 'react';
import Nav from './../Nav/Nav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import MainContent from './../MainContent/MainContent'
import { updateUser, updatePageData } from '../../ducks/reducer';


class Stream extends Component {


    componentDidMount(){
        console.log('Stream component did mount!')

        this.props.updatePageData(this.props.user)
        
        // console.log(this.props.pageData)
        // // if(this.props.match.params.handle) {
        // // }
        // console.log(this.props.match.params.handle)
    }
    
    render() {
            
        return (
            <div>
                <div>
                    <Nav />
                </div>
     

                <div className="frame">
                    <Sidebar />
                    <MainContent />
                </div>

                <span>Stream</span>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return { user: state.user, pageData: state.pageData  }
}



export default connect(mapStateToProps, {updateUser, updatePageData})(Stream);