import React from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Start from './Pages/Start'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Start />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
