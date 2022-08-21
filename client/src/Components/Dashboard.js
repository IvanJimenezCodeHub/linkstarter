import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './Dashboard.css'
import linkstarter_logo from '../images/linkstarter_logo.png'
import profile_pic from '../images/profile_pic.png'
import scale_img from '../images/scale_img.png'
import camera from '../images/camera.png'
import people from '../images/people.png'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useNavigate()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div>
            <img className='linkstarter-logo-4' alt='linkstarter-logo-4' src={linkstarter_logo} />
            <img className='profile-pic' alt='profile-pic' src={profile_pic} />

            <div className="user-info-container">
                <img className='profile-pic-1' alt='profile-pic-1' src={profile_pic} />
                <p className="linkstarter-txt">Linkstarter Fellow</p>
            </div>

            <Link to="/update-profile">
                <input type="submit" className="update-profile-btn" value="Update Profile" />
            </Link>
            <input type="submit" className="logout-btn" value="Log Out" onClick={handleLogout} />

            <h3 className="general-header">General</h3>

            <Link to="/">
                <div className="app-container">
                    <img className='scale-pic' alt='scale-pic' src={scale_img} />
                    <h3 className="app-header">App</h3>
                </div>
            </Link>

            <h3 className="feedback-header">We would love to hear your feedback!</h3>
            <p className="bug-message">For bugs, notify in discord #platform-help</p>
            <a href='https://forms.gle/mQUvo1DG3HmXFLFf8' target="_blank">
                <input type="submit" className="feedback-btn" value="Submit Feedback" />
            </a>

            <div className="video-call-container">
                <h3 className="video-call-header">Video Call</h3>
                <div className="line"></div>
                <img className='camera' alt='camera' src={camera} />
                <img className='people' alt='people' src={people} />
                <p className="team-room-txt">Linkstarter Team Room</p>

                <Link to="/video-call" target="_blank">
                    <input type="submit" className="join-call-btn" value="Join Call" />
                </Link>
            </div>
        </div>
    )
}
