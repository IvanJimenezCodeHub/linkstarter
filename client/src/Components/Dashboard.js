import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

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
            <div className='test'>
                <input type="submit" value="Log Out" onClick={handleLogout}/>
            </div>

            <Link to="/update-profile">
                Update Profile
            </Link>
        </div>
    )
}
