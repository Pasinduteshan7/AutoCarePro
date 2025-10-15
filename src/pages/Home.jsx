import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.css'
import hero from '../assets/images/hero.jpg'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
       
        <section className="services">
          <div className="service-box">
            <h3>Car Wash Services</h3>
            <p>Experience our car wash services with specialized treatments to keep your car looking brand new.</p>
          </div>
          <div className="service-box">
            <h3>Garage Services</h3>
            <p>Our garage services include full vehicle diagnostics, advanced repairs, and maintenance.</p>
          </div>
        </section>

        <section className="premium-services">
          <h2>Premium  Car Wash Services</h2>
          <div className="services-container">
            <div className="service"><div className="service-icon">🚗</div><div className="service-title">Exterior Washing</div><div className="service-description">Comprehensive exterior cleaning services.</div></div>
            <div className="service"><div className="service-icon">🧹</div><div className="service-title">Interior Washing</div><div className="service-description">Thorough interior cleaning and detailing.</div></div>
            <div className="service"><div className="service-icon">🧽</div><div className="service-title">Vacuum Cleaning</div><div className="service-description">Efficient vacuum cleaning for all types of vehicles.</div></div>
            <div className="service"><div className="service-icon">🛋️</div><div className="service-title">Seats Washing</div><div className="service-description">Deep cleaning and washing of car seats.</div></div>
            <div className="service"><div className="service-icon">🪟</div><div className="service-title">Window Wiping</div><div className="service-description">Crystal clear window cleaning services.</div></div>
            <div className="service"><div className="service-icon">💧</div><div className="service-title">Wet Cleaning</div><div className="service-description">Specialized wet cleaning services.</div></div>
          </div>
        </section>

        <section className="premium-services">
          <h2>Premium  Garage  Services</h2>
          <div className="services-container">
            <div className="service"><div className="service-icon">🛠️</div><div className="service-title">Engine Diagnostics</div><div className="service-description">Advanced diagnostics for engine performance.</div></div>
            <div className="service"><div className="service-icon">🔧</div><div className="service-title">Transmission Repair</div><div className="service-description">Expert transmission repair and maintenance.</div></div>
            <div className="service"><div className="service-icon">🔩</div><div className="service-title">Suspension Service</div><div className="service-description">Professional suspension repair and maintenance.</div></div>
            <div className="service"><div className="service-icon">🏎️</div><div className="service-title">Performance Tuning</div><div className="service-description">Enhance your car's performance with our tuning services.</div></div>
            <div className="service"><div className="service-icon">🛠️</div><div className="service-title">Brake Repairing</div><div className="service-description">Expert brake repair services.</div></div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
