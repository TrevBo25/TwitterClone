import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer'
import logo from '../../assets/tacoLogo/taco.svg';

class Nav extends Component {

    

    render() {
        return (

            //-- Work in Progress, added over weekend -- //
            <div className="nav-container">
                <div className="nav">
                    <div className="nav-logo"><img src={logo}/></div>
                    <div className="input-container">
                        <textarea rows="1" cols="30" wrap="hard" maxlength="80" type="text" placeholder="Let's Talko Bout It"/>
                    </div>

                    
                    <div className="dropdown"><img src={this.props.user.avatar}/>
                    <div className="dropdown-container">
                      <ul className="dropdown-content">
                        <li className="user-info">
                            <a href={`/#/${this.props.user.handle}`}>{this.props.user.name}</a><br/>
                            <a href={`/#/${this.props.user.handle}`}>{this.props.user.handle}</a>
                        </li>
                        <li><a href="#">Settings</a></li>
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

export default connect(mapStateToProps, {updateUser})(Nav);


