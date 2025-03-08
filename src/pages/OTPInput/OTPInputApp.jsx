// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OTPInput from "./pages/OTPInput/OTPInput.jsx"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<OTPInput />} />
        </Routes>
    </Router>
      
      
    </>
  )
}

export default App