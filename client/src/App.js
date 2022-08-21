import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from '../src/contexts/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login'
import Signup from './Components/Signup'
import UpdateProfile from './Components/UpdateProfile'
import ForgotPassword from './Components/ForgotPassword'
import Dashboard from './Components/Dashboard'
import VideoCall from './Components/VideoCall';

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/update-profile" element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            } />
            <Route path="/video-call" element={
              <PrivateRoute>
                <VideoCall />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}