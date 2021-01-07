import React, {useState, useRef, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from "../contexts/UserContext"
import axios from 'axios'

import '../sass/Signup.sass'

import Logo from '../icons/p.png'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const Signup = () => {
    const email = useRef(), 
        password = useRef(), 
        username = useRef(), 
        x = useRef(), 
        y = useRef(), 
        z = useRef()


    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const {setUser} = useContext(UserContext)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if(password.current.value.length < 8) {
            setError('Password must be at least 8 characters, including 1 number')
            return
        }

        try {
            setError("")
            setLoading(true)
            const response = await axios.post('https://floating-headland-02695.herokuapp.com/api/users/signup', {
                email: email.current.value, 
                password: password.current.value, 
                username: username.current.value,
                xCoordinate: x.current.value,
                yCoordinate: y.current.value,
                zCoordinate: z.current.value
            })
            setUser(response.data.user)
            history.push("/pending")
        } catch (err) {
            setError("Failed to create user")
            setLoading(false)
        }
    }

    return (
        <main className="signup">
            <Header></Header>
            <div className="page-layout">
                <Navigation></Navigation>
                <div className="page-content"></div>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="form-wrapper">
                    {error && <div className="error">{error}</div>}
                    <h1>Omen Application</h1>
                    <p>Already have an account? <span><Link to='/login'>Log in to your account</Link></span></p>

                    <form onSubmit={handleSubmit} className="form">
                        <input type="text" placeholder="Create a username" ref={username} required/>
                        <input type="email" placeholder="Enter your email" ref={email} required/>
                        <input type="password" placeholder="Enter your password" ref={password} required/>
                        <div className="coordinates">
                            <input type="text" placeholder="Enter your X" ref={x}/>
                            <input type="text" placeholder="Enter your Y" ref={y}/>
                            <input type="text" placeholder="Enter your Z" ref={z}/>    
                        </div>
                        <button type="submit" className={loading ? "disabled" : ""} disabled={loading}>{loading ? "Please wait..." : "Apply"}</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Signup
