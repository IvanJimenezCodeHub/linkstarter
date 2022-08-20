import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import computer from '../images/computer.png'
import linkstarter_logo from '../images/linkstarter_logo.png'
import important_info from '../images/important_info.png'
import './Login.css';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history("/")
        }
        catch {
            setError("Failed to sign in")
        }

        setLoading(false)
    }


    return (
        <div>
            <img className='linkstarter-logo' alt='linkstarter-logo' src={linkstarter_logo} />

            <div className='design-your-career-container'>
                <img className='computer-img' alt='computer-img' src={computer} />
                <h4 className='design-header'>Design Your Career</h4>
                <p className='design-txt'>Connect to your purpose &amp; strategize your 5-year plan with Co-Founders.</p>
                <a href='https://calendly.com/d/d24-c5h-f5z/headstarter-phase-2?month=2022-07' target='_blank' rel="noreferrer">
                    <button className='design-btn'>Book my appointment</button>
                </a>
            </div>

            <Link to="/signup">
                <p className='account-question-txt'>
                    Don't have an account? <a className='signup-link' href='/Login'>Get started</a>
                </p>
            </Link>

            <h2 className='sign-in-header'>Sign in to Linkstarter</h2>
            <p className='details-txt'>Enter your details below</p>

            <div className='email-txt-container'>
                <img className='important-info' alt='important-info' src={important_info} />
                <p className='email-txt'>Email is case sensitive</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="email" className='email-address' placeholder='Email Address' ref={emailRef} required />
                <input type="password" className='password' placeholder='Password' ref={passwordRef} required />
                <Link to="/forgot-password">
                    <a className='forgot-password-txt'>Forgot Password?</a>
                </Link>
                <input disabled={loading} type="submit" className='login-btn' value="Login" />
            </form>
        </div>
    )
}
