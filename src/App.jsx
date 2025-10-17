import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Price from './pages/Price'
import About from './pages/About'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/Price" element={<Price/>}/>
      
      <Route path="/About" element={<About/>}/>
    </Routes>
  )
}
