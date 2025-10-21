import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Price from './pages/Price'
import About from './pages/About'
import Service from './pages/Service'
import ServicePoints from './pages/ServicePoints'
import Appointment from './pages/Appointment'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/price" element={<Price/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/service-points" element={<ServicePoints/>}/>
      <Route path="/appoint" element={<Appointment/>}/>
    </Routes>
  )
}
