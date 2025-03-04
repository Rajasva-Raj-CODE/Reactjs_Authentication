import React from 'react'
import Layout from './Pages/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import LoginReg from './auth/LoginReg'
import SendPasswordResetEmail from './auth/SendPasswordResetEmail'
import ResetPassword from './auth/ResetPassword'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<LoginReg />} />
      <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail />} />
      <Route path='reset' element={<ResetPassword />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App