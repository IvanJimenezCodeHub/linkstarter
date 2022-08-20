import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './UpdateProfile.css';
import linkstarter_logo from '../images/linkstarter_logo.png'
import important_info from '../images/important_info.png'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <Link to="/">
                <img className='linkstarter-logo-3' alt='linkstarter-logo-3' src={linkstarter_logo} />
            </Link>

            <h2 className='update-profile-header'>Update Profile</h2>
            <p className='details-txt-3'>Enter your details below</p>

            <div className='email-txt-container-3'>
                <img className='important-info-3' alt='important-info-3' src={important_info} />
                <p className='email-txt-3'>Email is case sensitive</p>
            </div>

            <form onSubmit={handleSubmit}>
                <input type="email" className='email-address-3' placeholder='Email Address' ref={emailRef} required defaultValue={currentUser.email} />
                <input type="password" className='password-2' placeholder='Leave blank to keep the same' ref={passwordRef} />
                <input type="password" className='confirm-password-1' placeholder='Leave blank to keep the same' ref={passwordConfirmRef} />
                <input type="submit" disabled={loading} className='update-btn' value="Update" />
            </form>

            <p className='cancel-txt'>
                <Link to="/">
                    <a className='cancel-link'>Cancel</a>
                </Link>
            </p>

        </div>
    )
}
