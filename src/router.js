import React from 'react';
import {Switch, Route } from 'react-router-dom';

//Component paths
import Primary from './components/Primary/Primary';
import Register from './components/Register/Register';
import Stream from './components/Stream/Stream';
import Settings from './components/Settings/Settings';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile'

export default function() {
    return (
        <Switch>
            <Route component={ Primary } exact path="/"/>
            <Route component={ Register } path="/register"/>
            <Route component={ Profile } path='/:handle' />
            <Route component={ Settings } path='/settings'/>
        </Switch>
    )
}