import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'
import heroImg from '../assets/images/carousel-3.jpg'

export default function Header(){
  return (
    <header className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="site-title">AutoCare Pro</h1>
        <div className="hero-contact">
          <p>Opening Hours: Mon - Fri, 8:00 AM - 9:00 PM</p>
          <p>Call Us: +012 345 6789</p>
          <p>Email Us: autocarepro@gmail.com</p>
        </div>
      </div>

      <nav className="hero-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/price">Price</Link></li>
          <li><Link to="/service-points">Service Points</Link></li>
        </ul>
        <button className="appointment-btn" onClick={() => window.location.href = '/appoint'}>Get Appointment</button>
      </nav>
    </header>
  )
}
