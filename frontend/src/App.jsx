import { useState } from 'react'

import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signin from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Reset from './pages/Reset';
import Pass from './pages/Pass';
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={< Signin/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/pass" element={<Pass/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
