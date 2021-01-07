import React, {useState, useContext, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import axios from 'axios'

// import Container from '../components/Container'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../sass/Admin.sass'

const Admin = () => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [panel, setPanel] = useState('approved')
    const {user} = useContext(UserContext)
    let config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
    
    useEffect(() => {
        axios.get('https://floating-headland-02695.herokuapp.com/api/users', config).then(response => {
            setUsers(response.data)
        }).catch(err => {
            setError("Failed to retrieve data from server")
        })
    }, [])

    if(!user) return <Redirect to='/login'></Redirect>
    if(user.permission !== 'admin') return <Redirect to='/dashboard'></Redirect>



    async function updateStatus(username, newstatus) {
        try {
            setError("")
            setLoading(true)
            const response = await axios.post('https://floating-headland-02695.herokuapp.com/api/users/statusupdate', {username: username, status: newstatus})
            alert("User status has been updated")
            setUsers(prev => prev.filter(user => {return user.username != username}))
        } catch {
            setError("Failed to update status")
        }
        setLoading(false)
    }

    return (
        <main className="admin">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content">
                    <div className="card-table">
                        <div className="control">
                            <h4 className="table-title">Users' information</h4>
                            <div className="panel-control">
                                <button className={(panel == "approved") ? 'active' : ''} onClick={() =>setPanel('approved')}>Approved</button>
                                <button className={(panel == "pending") ? 'active' : ''} onClick={() =>setPanel('pending')}>Pending</button>
                            </div>
                        </div>
                        <div className="table-wrapper">
                        {users ? 
                            <table className="table">
                                <thead>
                                    <tr>                                     
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Updated at</th>
                                        <th>Status</th>
                                        <th>Coordinates</th>
                                        {
                                            panel == 'pending' && <th>Actions</th>
                                        }
                                    </tr>       
                                </thead>
                                <tbody>
                                    {
                                        users.map(u => {
                                            
                                            if (u.status == panel) {
                                                return (
                                                    <tr>                                     
                                                        <td>{u.username}</td>
                                                        <td>{u.email}</td>
                                                        <td>{u.updatedAt}</td>
                                                        <td>{u.status}</td>
                                                        <td>{u.coordinates.join(":")}</td>
                                                        {
                                                            u.status == 'pending' && <td> 
                                                            <button className="approve" onClick={()=>updateStatus(u.username, 'approved')}>Approve</button>
                                                            <button className="reject" onClick={()=>updateStatus(u.username, 'rejected')}>Reject</button>
                                                        </td>
                                                        }
                                                    </tr>
                                                )
                                            } 
                                            return
                                        })
                                    }  
                                </tbody>
                            </table> :
                            <p className="nodata">User data has not been loaded yet...</p>
                            }
                            {error && <p className="error">{error}</p> }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Admin
