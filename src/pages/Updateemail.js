import React, {useState, useRef, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import axios from 'axios'

import '../sass/Signup.sass'

import Logo from '../icons/p.png'
import Header from '../components/Header'
import Navigation from '../components/Navigation'


const Signup = () => {
    const email = useRef()

    const {user, setUser} = useContext(UserContext)


    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    if(!user) return <Redirect to='/login'></Redirect>


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            const response = await axios.post('https://floating-headland-02695.herokuapp.com/api/users/updateemail', {
                username: user.username,
                email: email.current.value, 
            })
            setSuccess('Updated successfully')
            setUser(response.data.result)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <main className="signup">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content">
                                       
                </div>
                <div className="logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="form-wrapper">
                        {error && <div className="error">{error}</div>}
                        {success && <div className="success">{success}</div>}
                        <h1>Change user information</h1>
                        <br/>

                        <form onSubmit={handleSubmit} className="form">
                            <input type="email" placeholder="Email" ref={email} required/>

                            <button type="submit" className={loading ? "disabled" : ""} disabled={loading}>{loading ? "Please wait..." : "Change email"}</button>
                        </form>
                    </div>
            </div>
        </main>
    )
}

export default Signup
