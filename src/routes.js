import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from './Components/Landing'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'

export default (
    <Switch>
        <Route component={ Landing } exact path='/'/>
        <Route component={ Dashboard } path='/dashboard'/>
        <Route component={ Profile } path='/profile/:id' />
        <Route component={ Register } path='/register'/>
    </Switch>
)