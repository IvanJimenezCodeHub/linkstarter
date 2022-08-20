import React from 'react'
import './ForgotPassword.css';
import linkstarter_logo from '../images/linkstarter_logo.png'
import important_info from '../images/important_info.png'

export default function ForgotPassword() {
    return (
        <div>
            <img className='linkstarter-logo-2' alt='linkstarter-logo-2' src={linkstarter_logo} />

            <h2 className='password-reset-header'>Password Reset</h2>
            <p className='details-txt-2'>Enter your details below</p>

            <div className='email-txt-container-2'>
                <img className='important-info-2' alt='important-info-2' src={important_info} />
                <p className='email-txt-2'>Email is case sensitive</p>
            </div>

            <form>
                <input type="text" className='email-address-2' placeholder='Email Address' />
                <input type="submit" className='reset-password-btn' value="Reset Password" />
            </form>

            <p className='login-txt'>
                Already have an account? <a className='login-link-2' href='/ForgotPassword'>Login</a>
            </p>
            <p className='signup-txt'>
                Don't have an account? <a className='signup-link-2' href='/ForgotPassword'>Get started</a>
            </p>

        </div>
    )
}
