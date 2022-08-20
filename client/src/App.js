import React, { useState, useEffect } from 'react'
import ForgotPassword from './Components/ForgotPassword'
import Login from './Components/Login'
import Signup from './Components/Signup'
import UpdateProfile from './Components/UpdateProfile'

export default function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <UpdateProfile />
      {/*
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
        */}
    </div>
  )
}