import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/service.css'

export default function Service(){
  return (
    <div>
      <Header />
      <main>
        <section className="premium-services">
          <h2>Premium Car Wash Services</h2>
          <div className="services-container">
            <div className="service"><div className="service-icon">🚗</div><div className="service-title">Exterior Washing</div><div className="service-description">Comprehensive exterior cleaning services.</div></div>
            <div className="service"><div className="service-icon">🧹</div><div className="service-title">Interior Washing</div><div className="service-description">Thorough interior cleaning and detailing.</div></div>
            <div className="service"><div className="service-icon">🧽</div><div className="service-title">Vacuum Cleaning</div><div className="service-description">Efficient vacuum cleaning for all types of vehicles.</div></div>
            <div className="service"><div className="service-icon">🛋️</div><div className="service-title">Seats Washing</div><div className="service-description">Deep cleaning and washing of car seats.</div></div>
            <div className="service"><div className="service-icon">🪟</div><div className="service-title">Window Wiping</div><div className="service-description">Crystal clear window cleaning services.</div></div>
            <div className="service"><div className="service-icon">💧</div><div className="service-title">Wet Cleaning</div><div className="service-description">Specialized wet cleaning services.</div></div>
            <div className="service"><div className="service-icon">🧴</div><div className="service-title">Waxing</div><div className="service-description">Professional car waxing services for a glossy finish.</div></div>
            <div className="service"><div className="service-icon">🚿</div><div className="service-title">Underbody Cleaning</div><div className="service-description">Comprehensive underbody cleaning to remove dirt and grime.</div></div>
          </div>
        </section>

        <section className="premium-services">
          <h2>Premium Garage Services</h2>
          <div className="services-container">
            <div className="service"><div className="service-icon">🔧</div><div className="service-title">Engine Diagnostics</div><div className="service-description">Advanced diagnostics for engine performance.</div></div>
            <div className="service"><div className="service-icon">⚙️</div><div className="service-title">Transmission Repair</div><div className="service-description">Expert transmission repair and maintenance.</div></div>
            <div className="service"><div className="service-icon">🛠️</div><div className="service-title">Suspension Service</div><div className="service-description">Professional suspension repair and maintenance.</div></div>
            <div className="service"><div className="service-icon">🏎️</div><div className="service-title">Performance Tuning</div><div className="service-description">Enhance your car's performance with our tuning services.</div></div>
            <div className="service"><div className="service-icon">🛠️</div><div className="service-title">Brake Repairing</div><div className="service-description">Expert brake repair services.</div></div>
            <div className="service"><div className="service-icon">🔋</div><div className="service-title">Battery Replacement</div><div className="service-description">Reliable battery replacement services.</div></div>
            <div className="service"><div className="service-icon">🚙</div><div className="service-title">Oil Changes</div><div className="service-description">Regular oil changes to keep your car running smoothly.</div></div>
          </div>
        </section>

        <section className="blue-section">
          <h2>AutoCare Pro AUTO PARTS MARKET PLACE</h2>
          <h1>Find spare parts for your car</h1>
          <p>AutoCare Pro has launched a specialized online marketplace for spare parts dealers that offers car owners a convenient way to find authentic OEM or OES spare parts.</p>
          <button className="coming-soon">Coming Soon</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}
