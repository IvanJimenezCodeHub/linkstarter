import React from 'react'
import './UpdateProfile.css';
import linkstarter_logo from '../images/linkstarter_logo.png'
import important_info from '../images/important_info.png'

export default function UpdateProfile() {
    return (
        <div>
            <img className='linkstarter-logo-3' alt='linkstarter-logo-3' src={linkstarter_logo} />

            <h2 className='update-profile-header'>Update Profile</h2>
            <p className='details-txt-3'>Enter your details below</p>

            <div className='email-txt-container-3'>
                <img className='important-info-3' alt='important-info-3' src={important_info} />
                <p className='email-txt-3'>Email is case sensitive</p>
            </div>

            <form>
                <input type="text" className='email-address-3' placeholder='Email Address' />
                <input type="text" className='password-2' placeholder='Password' />
                <input type="text" className='confirm-password' placeholder='Confirm Password' />
                <input type="submit" className='update-btn' value="Update" />
            </form>

            <p className='cancel-txt'>
                <a className='cancel-link' href='/UpdateProfile'>Cancel</a>
            </p>

        </div>
    )
}
