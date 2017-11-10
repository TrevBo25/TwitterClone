import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {updateUser} from './../../ducks/reducer'
import logo from '../../assets/tacoLogo/taco.svg';
import { goToSettings, viewProfile } from '../../ducks/reducer';

class Nav extends Component {

    constructor() {
        super()

        this.state = {
            guts: 'test'
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(input) {
        this.setState({
            guts: input
        })
    }

    submitPost = (guts) => {
        var post = {
            guts,
            user_id: this.props.user.userData.id
        }

        axios.post('/api/createpost', post).then((response) => {
            console.log(response.data);
        })
    }

    goToSettings(bool){
        this.props.goToSettings(bool);
    }
    

    render() {
        return (

            //-- Work in Progress, added over weekend -- //
            <div className="nav-body">
                <div className="nav">

                    <div className="nav-logo"><Link to="" ><img src={logo}/></Link></div>

                    <div className="talko-box-container">
                        <textarea value={this.state.guts} className="talko-box" rows="1" cols="30" wrap="hard" mength="80" type="text" placeholder="Let's Talko Bout It"
                        onChange={(e) => {this.handleInput(e.target.value)}}
                        />
                        <button id="buttion" onClick={() => {this.submitPost(this.state.guts)}}>
                        ♥ 💋 Please touch me 💋 ♥ 
                        </button>
                    </div>

                    
                    <div className="dropdown"><img src={this.props.user.userData.avatar} onClick={() => this.goToSettings(false)}/>
                    <div className="dropdown-container">
                      <ul className="dropdown-content">
                        <li className="user-info">
                            <a className="usernname" href={`/#/${this.props.user.userData.handle}`}>{this.props.user.userData.name}</a><br/>
                            <a href={`/#/${this.props.user.userData.handle}`}>@{this.props.user.userData.handle}</a>
                        </li>
                        <li onClick={() => this.goToSettings(true)}><Link to="" >Settings</Link></li>
                        <li><a href="#">Logout</a></li>
                      </ul>
                    </div>
                    </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {user: state.user, profile: state.profile}
}

export default connect(mapStateToProps, {goToSettings, viewProfile})(Nav);


