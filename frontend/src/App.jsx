import { useState } from 'react'

import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Username from './components/Username'
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Username />} />
          <Route path="/signin" element={<Username />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
