import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AuthProvider } from './components/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'

function App() {

  return (
     <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
