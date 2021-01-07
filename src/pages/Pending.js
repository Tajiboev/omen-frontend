import React, {useContext} from 'react'
import { UserContext } from "../contexts/UserContext"
import {Redirect} from 'react-router-dom'

import '../sass/Pending.sass'
import Header from '../components/Header'
import Navigation from '../components/Navigation'



const Pending = () => {
    const {user} = useContext(UserContext)
    if(!user) return <Redirect to='/login'></Redirect>
    if(user.status === 'approved') return <Redirect to='/dashboard'></Redirect>

    return (
        <main className='home'>
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <section className="page-content">
                    
                </section>
                <div className="form-wrapper">
                    {(user.status === 'pending') && <h1>You application is pending</h1>}
                    {(user.status === 'rejected') && <h1>You application has been rejected</h1>}
                </div>
            </div>
        </main>
    )
}

export default Pending
