import React, { Component } from 'react';
import Nav from './../Nav/Nav'
import Sidebar from './../Sidebar/Sidebar';
import MainContent from './../MainContent/MainContent'

class Stream extends Component {
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

export default Stream;