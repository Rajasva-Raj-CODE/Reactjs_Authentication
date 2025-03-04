import React from 'react'
import Layout from './Pages/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import LoginReg from './auth/LoginReg'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<LoginReg />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App