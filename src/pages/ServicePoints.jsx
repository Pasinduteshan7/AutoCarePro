import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/service-points.css'

export default function ServicePoints(){
  return (
    <div>
      <Header />
      <main>
        <section className="service-points">
          <h2>Service Points Island-wide</h2>
          <iframe title="Sri Lanka map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958250.0989333213!2d78.27758853967122!3d7.8730520000000075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fdd1e74b08b7%3A0x567c60c0aa9025c6!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1674568909901!5m2!1sen!2slk" width="100%" height="500" style={{border:0,borderRadius:8}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <section className="branches">
          <h2>Major Cities and their Branches</h2>
          <div className="city"><h3>Colombo</h3><ul><li>Branch 1: 123 Main St.</li><li>Branch 2: 456 Side St.</li></ul></div>
          <div className="city"><h3>Kandy</h3><ul><li>Branch 1: 789 Hill St.</li><li>Branch 2: 101 Peak Rd.</li></ul></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
