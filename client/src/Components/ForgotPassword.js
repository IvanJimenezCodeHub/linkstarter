import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import './ForgotPassword.css';
import linkstarter_logo from '../images/linkstarter_logo.png'
import important_info from '../images/important_info.png'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        }
        catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <div>
            <img className='linkstarter-logo-2' alt='linkstarter-logo-2' src={linkstarter_logo} />

            <h2 className='password-reset-header'>Password Reset</h2>
            <p className='details-txt-2'>Enter your details below</p>

            <div className='email-txt-container-2'>
                <img className='important-info-2' alt='important-info-2' src={important_info} />
                <p className='email-txt-2'>Email is case sensitive</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="email" className='email-address-2' placeholder='Email Address' ref={emailRef} required />
                <input type="submit" disabled={loading} className='reset-password-btn' value="Reset Password" />
            </form>

            <Link to="/login">
                <p className='login-txt'>
                    Already have an account? <a className='login-link-2' href='/ForgotPassword'>Login</a>
                </p>
            </Link>

            <Link to="/signup">
                <p className='signup-txt'>
                    Don't have an account? <a className='signup-link-2' href='/ForgotPassword'>Get started</a>
                </p>
            </Link>
        </div>
    )
}
