import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"

// import CancelIcon from '../icons/cancel-small.svg'

import BellIcon from '../icons/notification.svg'

import './Header.sass'

const Header = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <header>
                <div className="header">
                    <div className="header-brand">
                        <Link to="/dashboard">OMEN</Link>
                    </div>
                    {user && 
                        <ul>
                            <li className="header-item">
                                <button className="icon-btn"><img src={BellIcon} alt=""/></button>
                            </li>
                            <li className="header-item">
                                <div className="logout">
                                    <button onClick={()=>setUser(null)}>Log out</button>
                                </div>
                            </li>                    
                        </ul>                         
                    }
                    {
                        !user && <Link className="register-btn" to='/signup'>Register</Link>
                    }
                </div>
        </header>
    )
}

export default Header
