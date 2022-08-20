import React from 'react'
import './Signup.css';
import linkstarter_logo from '../images/linkstarter_logo.png'
import video_call from '../images/video_call.png'
import important_info from '../images/important_info.png'

export default function Signup() {
  return (
    <div>
      <img className='linkstarter-logo-1' alt='linkstarter-logo-1' src={linkstarter_logo} />

      <div className='software-container'>
        <img className='video-call-img' alt='video-call-img' src={video_call} />
        <h4 className='connect-header'>Where Software Engineers Connect</h4>
        <p className='connect-txt'>
          - Connect to your teammates in seconds
          <br /><br /><br />
          - Develop lasting team bonds
          <br /><br /><br />
          - Solve real-world problems
        </p>
      </div>

      <p className='account-question-txt-1'>
        Already have an account? <a className='login-link' href='/Login'>Login</a>
      </p>

      <h2 className='sign-up-header'>Sign up to Linkstarter</h2>
      <p className='details-txt-1'>Enter your details below</p>

      <div className='email-txt-container-1'>
        <img className='important-info-1' alt='important-info' src={important_info} />
        <p className='email-txt-1'>Email is case sensitive</p>
      </div>

      <form>
        <input type="text" className='email-address-1' placeholder='Email Address' />
        <input type="password" className='password-1' placeholder='Password' />
        <input type="submit" className='register-btn' value="Register" />
      </form>
    </div>
  )
}
