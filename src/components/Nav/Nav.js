import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {updateUser} from './../../ducks/reducer'
import logo from '../../assets/tacoLogo/taco.svg';

class Nav extends Component {

    

    render() {
        return (

            //-- Work in Progress, added over weekend -- //
            <div className="nav-body">

                <div className="nav">

                    <div className="nav-logo"><img src={logo}/></div>

                    <div className="input-container">
                        <textarea className="talko-box" rows="1" cols="30" wrap="hard" maxLength="80" type="text" placeholder="Let's Talko Bout It"/>
                    </div>

                    
                    <div className="dropdown"><img src={this.props.user.userData.avatar}/>
                    <div className="dropdown-container">
                      <ul className="dropdown-content">
                        <li className="user-info">
                            {/* <Link className="usernname" to='{this.props.user.name}'>{this.props.user.name}</Link> */}
                        </li>
                        <li>
                            <Link to="settings"><i className="fa fa-cog" aria-hidden="true"></i>  Settings</Link></li>
                        <li onClick={() => {this.props.updateUser({})}}><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i>  Logout</a></li>
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

export default connect(mapStateToProps, {updateUser})(Nav);
