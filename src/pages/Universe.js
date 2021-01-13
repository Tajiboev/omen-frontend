import React, {useState} from 'react'

import Dropdown from 'react-bootstrap/Dropdown'
import { Icon } from '@iconify/react';
import chevronDown from '@iconify-icons/mdi/chevron-down';


import HomePane from '../components/universe/UniverseHome'
import SettingsPane from '../components/universe/Settings'
import  AllianceCurrent from '../components/universe/AllianceCurrent'
import  Allianceforts from '../components/universe/Allianceforts'
import  Cluster from '../components/universe/Cluster'
import  Distwhores from '../components/universe/Distwhores'
import  Scanners from '../components/universe/Scanners'
import  Old from '../components/universe/Old'
import  Planets from '../components/universe/Planets'
import  Galaxies from '../components/universe/Galaxies'

import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../sass/Universe.sass'


import '../sass/Dashboard.sass'

const Universe = () => {
    const [showPanel, setShowPanel] = useState('home')
    return (
        <main className="universe">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content">
                    <section className='tabs-section'>
                        <nav className='universe-nav'>
                            <div className="nav-item nav-home" onClick={() => setShowPanel('home')}>
                                Home
                            </div>
                            <div className="nav-item nav-alliances">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Alliances <Icon icon={chevronDown} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={() => setShowPanel('alliance-current')}>View alliances: Current</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2" onClick={() => setShowPanel('old')}>View alliances: Past rounds</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('cluster')}>01 - 949.7M - Cluster 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('cluster')}>01 - 949.7M - Cluster 3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('cluster')}>01 - 949.7M - Cluster 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="nav-item nav-galaxies">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Galaxies <Icon icon={chevronDown} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('galaxies')}>View galaxies</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('allianceforts')}>Alliance forts</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="nav-item nav-planets">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Planets <Icon icon={chevronDown} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('planets')}>List planets</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('scanners')}>Top 100 (Known) Scanners</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3" onClick={() => setShowPanel('distwhores')}>Top 100 (Known) Distwhores</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="nav-item nav-old" onClick={() => setShowPanel('old')}>
                                Old rounds
                            </div>
                            <div className="nav-item nav-settings" onClick={() => setShowPanel('settings')}>
                                Settings
                            </div>
                            <div className="nav-item nav-input">
                                <input type="text" placeholder="I am interested in.."/>
                            </div>
                            <div className="nav-item nav-winter">
                                Winter round 2020
                            </div>
                            <div className="nav-item nav-current">
                                T2022 16:34 (Updated 20 hours ago)
                            </div>
                        </nav>
                        {showPanel === 'home' && <HomePane></HomePane>}
                        {showPanel === 'alliance-current' && <AllianceCurrent></AllianceCurrent>}
                        {showPanel === 'cluster' && <Cluster></Cluster>}
                        {showPanel === 'old' && <Old></Old>}
                        {showPanel === 'galaxies' && <Galaxies></Galaxies>}
                        {showPanel === 'distwhores' && <Distwhores></Distwhores>}
                        {showPanel === 'scanners' && <Scanners></Scanners>}
                        {showPanel === 'allianceforts' && <Allianceforts></Allianceforts>}
                        {showPanel === 'planets' && <Planets></Planets>}
                        {showPanel === 'settings' && <SettingsPane></SettingsPane>}
                        <footer>
                            <p>Total Execution Time:</p> <span>35ms</span>
                        </footer>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Universe
