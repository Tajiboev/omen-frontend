import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Chart from '../components/Chart'


import '../sass/Dashboard.sass'

const Dashboard = () => {
    const {user} = useContext(UserContext)
    if(!user) return <Redirect to='/login'></Redirect>
    if(user.status !== 'approved') {
        return <Redirect to='/pending'></Redirect>
    }
    return (
        <main className="dashboard">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                {user && <div className="page-content">
                    <section className="cards-wrap">
                        <div className="card">
                            <div className='card-row'>
                                <h3>$12.34</h3>
                                <p className='indicator'>+3.5%</p>
                                <div className="card-icon">A</div>
                            </div>
                            <p className="card-title">Defence Contributions</p>
                        </div>
                        <div className="card">
                            <div className='card-row'>
                                <h3>$12.34</h3>
                                <p className='indicator'>+3.5%</p>
                                <div className="card-icon">A</div>
                            </div>
                            <p className="card-title">Offence Contributions</p>
                        </div>
                        <div className="card">
                            <div className='card-row'>
                                <h3>$12.34</h3>
                                <p className='indicator'>+3.5%</p>
                                <div className="card-icon">A</div>
                            </div>
                            <p className="card-title">Planet Ranking</p>
                        </div>
                        <div className="card">
                            <div className='card-row'>
                                <h3>$12.34</h3>
                                <p className='indicator'>+3.5%</p>
                                <div className="card-icon">A</div>
                            </div>
                            <p className="card-title">Galaxy Ranking</p>
                        </div>
                    </section>
                    {/* cards-wrap end */}
                    <section className="additional-info">
                        <div className="card-left">
                            <p className='card-title'>Defence/Offence Breakdown</p>
                            <Chart></Chart>
                            <div className="transfer">
                                <div>
                                    <p className="transfer-title">Contribution ranking</p>
                                    <p className="transfer-date">07 Jan 2019, 09:12AM</p>
                                </div>
                                <p className="transfer-amount">1st</p>
                            </div>
                        </div>
                        <div className="card-right">
                            <div className="row">
                                <p className='card-title'>Important Announcements</p>
                                <p className='data-status'>Your data status</p>
                            </div>
                            <div className="data">
                                <div className='data-icon'>F</div>
                                <div className="data-text">
                                    <p className="data-title">Admin dashboard design</p>
                                    <p className="data-subtitle">Broadcast web app mockup</p>
                                </div>
                                <div className="data-meta">
                                    <p className="meta-time">15 minutes ago</p>
                                    <p className="meta-info">30 tasks, 5 issues</p>
                                </div>
                            </div>
                            <div className="data">
                                <div className='data-icon'>F</div>
                                <div className="data-text">
                                    <p className="data-title">Admin dashboard design</p>
                                    <p className="data-subtitle">Broadcast web app mockup</p>
                                </div>
                                <div className="data-meta">
                                    <p className="meta-time">15 minutes ago</p>
                                    <p className="meta-info">30 tasks, 5 issues</p>
                                </div>
                            </div>
                            <div className="data">
                                <div className='data-icon'>F</div>
                                <div className="data-text">
                                    <p className="data-title">Admin dashboard design</p>
                                    <p className="data-subtitle">Broadcast web app mockup</p>
                                </div>
                                <div className="data-meta">
                                    <p className="meta-time">15 minutes ago</p>
                                    <p className="meta-info">30 tasks, 5 issues</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>}
            </div>
        </main>
    )
}

export default Dashboard
