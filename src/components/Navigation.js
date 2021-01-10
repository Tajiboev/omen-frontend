import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import './navigation.sass'

import speedometerIcon from '@iconify-icons/mdi/speedometer';
import imageFilterCenterFocus from '@iconify-icons/mdi/image-filter-center-focus';
import crosshairsGps from '@iconify-icons/mdi/crosshairs-gps';
import earthIcon from '@iconify-icons/mdi/earth';
import calendarToday from '@iconify-icons/mdi/calendar-today';
import securityIcon from '@iconify-icons/mdi/security';
import contactsIcon from '@iconify-icons/mdi/contacts';
import accountCog from '@iconify-icons/mdi/account-cog';


import { Icon } from '@iconify/react';


import Profileicon from '../icons/p_50.png'
import DotsIcon from '../icons/dots.svg'

// attacks icon = gallery
// dashboard icon = dashboard
// scanning icon = sidebar layouts
// universe = general pages
// prepare raid icon = calendar
// record defence = user pages
// manage membership = icons


const Navigation = () => {
    const {user} = useContext(UserContext)
    const [changer, setChanger] = useState(false)

    return (
        <nav className="sidenav">
            {changer && <div className="changer">
                <Link to='/updatepassword' className="update-link"><span className="nav-icon"><Icon icon={accountCog} /></span>Update password</Link>
                <Link to='/updateemail' className="update-link"><span className="nav-icon"><Icon icon={accountCog} /></span>Update email</Link>
                <Link to='/updatexyz' className="update-link"><span className="nav-icon"><Icon icon={accountCog} /></span>Update coordinates</Link>
            </div>}
            {user && 
            <div className="profile-info">
                <img src={Profileicon} alt="profile"/>
                <div className="info">
                    <p className="name">{user ? user.username : "Username"}</p>
                </div>
                <button className="extra-info" onClick={()=> setChanger(!changer)}><img src={DotsIcon} alt=""/></button>
            </div>
            }
            <p className="title">Navigation</p>
            {user &&
            <div>
                <ul className="side-ul">
                    <li className="side-li"><span className="nav-icon"><Icon icon={speedometerIcon} /></span>
                        <Link to='/dashboard' className="toAdmin">Dashboard</Link>
                    </li>
                    <li className="side-li"><span className="nav-icon"><Icon icon={imageFilterCenterFocus} /></span>Attacks</li>
                    <li className="side-li"><span className="nav-icon"><Icon icon={crosshairsGps} /></span>Scanning</li>
                    <li className="side-li"><span className="nav-icon"><Icon icon={earthIcon} /></span>
                        <Link to='/universe' className="toAdmin">Universe</Link>
                    </li>
                </ul>
                <p className="title">Command Team</p>
                <ul className="side-ul">
                    <li className="side-li"><span className="nav-icon"><Icon icon={calendarToday} /></span>Prepare raid</li>
                    <li className="side-li"><span className="nav-icon"><Icon icon={securityIcon} /></span>Record defence</li>
                    {(user.permission === 'admin') &&<li className="side-li"><span className="nav-icon"><Icon icon={contactsIcon} /></span>
                        <Link to='/admin' className="toAdmin">Manage membership</Link>
                    </li>}
                </ul>
            </div>
            }
            {!user &&
            <ul className="side-ul">
                <li className="side-li"><span className="nav-icon"><Icon icon={earthIcon} /></span>
                    <Link to='/universe' className="toAdmin">Universe</Link>
                </li>
            </ul>
            }
        </nav>
    )
}

export default Navigation
