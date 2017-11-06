import React from 'react';
import {Switch, Route } from 'react-router-dom';

//Component paths
import Primary from './components/Primary/Primary';
import Register from './components/Register/Register';
import Stream from './components/Stream/Stream';
import Settings from './components/Settings/Settings';
import Landing from './components/Landing/Landing'

export default function() {
    return (
        <Switch>
            <Route component={ Primary } exact path="/"/>
<<<<<<< HEAD
            <Route component={ Register } path="/register"/>
            {/* <Route component={ Stream } path='/:handle' /> */}
=======
            <Route component={ Stream } path='/:handle' />
>>>>>>> 4a1fcac3da95265358892c6ca39a63e5a2ab91c2
            <Route component={ Settings } path='/settings'/>
        </Switch>
    )
}