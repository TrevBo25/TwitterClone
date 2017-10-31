import React from 'react';
import {Switch, Route } from 'react-router-dom';

//Component paths
import Primary from './components/Primary/Primary';
import Register from './components/Register/Register'

export default function() {
    return (
        <Switch>
            <Route component={ Primary } exact path="/"/>
            <Route component={ Register } path="/register"/>
            {/* <Route component={ Login } path="/login"/>
            <Route component={ Stream } path="/stream"/> */}
        </Switch>
    )
}