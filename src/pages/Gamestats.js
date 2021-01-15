import React, {useState, useContext, useRef, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import axios from 'axios'


import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../sass/Gamestats.sass'

const Gamestats = () => {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const {user} = useContext(UserContext)
    const [stats, setStats] = useState(null)
    const statsUrlRef = useRef()
    const [dataUrl, setDataUrl] = useState('https://game.planetarion.com/manual.pl?action=statsxml')

    useEffect(() => {
        axios.get(dataUrl, {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(function(response) {

                setStats({ stats: response.data });
                console.log(response.data)
            })
            .catch(function(error) {
                setError('Failed to retrieve stats')
                console.log(error);
            })
    }, [])

    if(!user) return <Redirect to='/login'></Redirect>

    const getStats = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.get(statsUrlRef.current.value, {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(function(response) {
                setStats({ stats: response.data });
                console.log(response.data)
            })
            .catch(function(error) {
                setError(`Failed to retrieve data from the given url`)
                console.log(error);
            })
        setLoading(false)
        e.target.reset()
    }

    return (
        <main className="gamestats">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content">
                    <div className="stats">
                        <div className="stats-url">
                            <form onSubmit={getStats}>
                                <input type="url" placeholder="Insert game stats url here" ref={statsUrlRef}/>
                                <button type="submit" disabled={loading}>Update</button>
                            </form>
                        </div>
                        <div className="stats-result">
                            <div className="source">
                                <div>
                                    <p className="lead">Last data source used</p>
                                    <p>{dataUrl}</p>
                                </div>
                                <div>
                                    <p className="lead">Last updated</p>
                                    <p>{new Date().toLocaleString()}</p>
                                </div>
                            </div>
                            {stats && <div className="stats-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Race</th>
                                            <th>Class</th>
                                            <th>Target 1</th>
                                            <th>Target 2</th>
                                            <th>Target 3</th>
                                            <th>Type</th>
                                            <th>Initiative</th>
                                            <th>Guns</th>
                                            <th>Armor</th>
                                            <th>Damage</th>
                                            <th>Empres</th>
                                            <th>Meta</th>
                                            <th>Crystal</th>
                                            <th>Eonium</th>
                                            <th>Armorcost</th>
                                            <th>Damagecost</th>
                                            <th>Baseeta</th>                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>}
                            {error && <div className="error">{error}</div> }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Gamestats
