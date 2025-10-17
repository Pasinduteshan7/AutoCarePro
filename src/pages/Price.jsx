import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/price.css'
import cleaningBg from '../assets/images/Car-wash-al-quoz-best.jpeg'
import garageBg from '../assets/images/carousel-2.jpg'

export default function Price(){
  return (
    <div>
      <Header />
      <main>
        <section className="cleaning-section" style={{ backgroundImage: `url(${cleaningBg})` }}>
          <div className="section-overlay" />
          <div className="container">
            <h1 className="main-title">Plans and Pricing</h1>
            <div className="plans-container">
              <div className="plan-column">
                <h2>Basic Cleaning</h2>
                <p className="price">Price: LKR 9,399</p>
                <ul>
                  <li>Seats Washing (included)</li>
                  <li>Vacuum Cleaning (included)</li>
                  <li>Exterior Cleaning (included)</li>
                  <li>Interior Wet Cleaning (not included)</li>
                </ul>
              </div>
              <div className="plan-column">
                <h2>Premium Cleaning</h2>
                <p className="price">Price: LKR 34,000</p>
                <ul>
                  <li>Seats Washing (included)</li>
                  <li>Vacuum Cleaning (included)</li>
                  <li>Exterior Cleaning (included)</li>
                  <li>Interior Wet Cleaning (included)</li>
                </ul>
              </div>
              <div className="plan-column">
                <h2>Complex Cleaning</h2>
                <p className="price">Price: LKR 30,848</p>
                <ul>
                  <li>Seats Washing (included)</li>
                  <li>Vacuum Cleaning (included)</li>
                  <li>Exterior Cleaning (included)</li>
                  <li>Interior Wet Cleaning (included)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="garage-section" style={{ backgroundImage: `url(${garageBg})` }}>
          <div className="section-overlay" />
          <div className="container">
            <h1 className="main-title">Garage Plans</h1>
            <div className="plans-container">
              <div className="plan-column">
                <h2>Standard Garage Plans</h2>
                <p className="price">Starting at: LKR 60,000</p>
                <ul>
                  <li>Single-Car Garage</li>
                  <li>Double-Car Garage</li>
                </ul>
              </div>
              <div className="plan-column">
                <h2>Specialty Garage Plans</h2>
                <ul>
                  <li>Garage with Loft</li>
                  <li>RV Garage</li>
                </ul>
              </div>
              <div className="plan-column">
                <h2>Multi-Use Garage Plans</h2>
                <ul>
                  <li>Garage Apartment</li>
                  <li>Workshop Garage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
