import React, {useState, useContext } from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import { Pie } from 'react-chartjs-2'


import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../sass/Scan.sass'

const Scanning = () => {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [panel, setPanel] = useState('group-scan')
    const {user} = useContext(UserContext)

    if(!user) return <Redirect to='/login'></Redirect>
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };


    return (
        <main className="scan">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content">
                    <div className="card-table">
                        <div className="control">
                            <div className="panel-control">
                                <button className={(panel === "group-scan") ? 'active' : ''} onClick={() =>setPanel('group-scan')}>Group scan</button>
                                <button className={(panel === "attacking") ? 'active' : ''} onClick={() =>setPanel('attacking')}>Attacking</button>
                                <button className={(panel === "defending") ? 'active' : ''} onClick={() =>setPanel('defending')}>Defending</button>
                            </div>
                        </div>
                    </div>
                    <div className="scanner">
                        <div className="scan-url">
                            <form>
                                <input type="url" placeholder="Insert your scan url here"/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="scan-result">
                            <p>Scan result</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                    </tr>                                   
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                    <tr>
                                        <td>Random name</td>
                                        <td>100500</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Scanning
