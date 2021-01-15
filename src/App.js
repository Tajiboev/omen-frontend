import React, { useState, useMemo } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { UserContext } from "./contexts/UserContext"
import PrivateRoute from "./PrivateRoute"

import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Scanning from './pages/Scanning'
import Pending from './pages/Pending'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Universe from './pages/Universe'
import Gamestats from './pages/Gamestats'
import Updateemail from './pages/Updateemail'
import Updatepwd from './pages/Updatepwd'
import Updatexyz from './pages/Updatexyz'
import Error from './pages/Error'


import './sass/App.sass'

const App = () => {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    
    return (
        <Router>
            <UserContext.Provider value={value}>
                <Switch>
                    <Route path='/pending' component={Pending} />
                    <Route path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/admin' component={Admin} />
                    <Route path='/login' component={Login} />
                    <Route path='/scanning' component={Scanning} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/universe' component={Universe} />
                    <Route path='/gamestats' component={Gamestats} />
                    <Route path='/updatepassword' component={Updatepwd} />
                    <Route path='/updateemail' component={Updateemail} />
                    <Route path='/updatexyz' component={Updatexyz} />
                    <Route exact path='/' component={Login} />
                    <Route path='*' component={Login} />
                </Switch>
            </UserContext.Provider>
        </Router>
    )
}

export default App
