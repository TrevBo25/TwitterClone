import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {updateUser} from './../../ducks/reducer'
import logo from '../../assets/tacoLogo/taco.svg';
import { goToSettings, viewProfile } from '../../ducks/reducer';

class Nav extends Component {

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
                        <textarea className="talko-box" rows="1" cols="30" wrap="hard" maxlength="80" type="text" placeholder="Let's Talko Bout It"/>
                    </div>

                    
                    <div className="dropdown"><img src={this.props.user.avatar} onClick={() => this.goToSettings(false)}/>
                    <div className="dropdown-container">
                      <ul className="dropdown-content">
                        <li className="user-info">
                            <a className="usernname" href={`/#/${this.props.user.handle}`}>{this.props.user.name}</a><br/>
                            <a href={`/#/${this.props.user.handle}`}>@{this.props.user.handle}</a>
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


