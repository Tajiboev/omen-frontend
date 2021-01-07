import React, {useState, useRef, useContext} from 'react'
import {Link, useHistory, Redirect} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from "../contexts/UserContext"


import '../sass/Login.sass'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Logo from '../icons/p.png'

const Login = () => {
    const email = useRef(), password = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            const response = await axios.post('https://floating-headland-02695.herokuapp.com/api/users/login', {email: email.current.value, password: password.current.value})      
            setUser(response.data.user)
            if(response.data.user.status === 'approved'){
                history.push("/dashboard")
            } else {
                history.push("/pending")
            }            
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    return (
        <main className="login">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content"></div>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="form-wrapper">
                    {error && <div className="error">{error}</div>}
                    <h1>Log in to your account</h1>
                    <p>Don't have an account? <span><Link to='/signup'>Create an account</Link></span></p>

                    <form onSubmit={handleSubmit} className="form">
                        <input type="email" placeholder="Enter your email" ref={email} required/>
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" ref={password} required/>
                        <div className="check-group">
                            <input type="checkbox" id="pwd" onClick={()=> setShowPassword(prev => !prev)}/>
                            <label htmlFor="pwd"> Show password </label>
                        </div>
                        <button type="submit" className={loading ? "disabled" : ""} disabled={loading}>{loading ? "Please wait..." : "Log in"}</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login
