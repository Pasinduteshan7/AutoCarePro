import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/about.css'

export default function Appointment(){
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2 style={{textAlign:'center', marginTop:20}}>Available Time Slots for Garage and Car Wash</h2>
          <div style={{overflowX:'auto', margin:20}}>
            <table style={{width:'100%', borderCollapse:'collapse', textAlign:'center', border:'1px solid #ddd'}}>
              <thead>
                <tr style={{backgroundColor:'#f4f4f9'}}>
                  <th style={{padding:10, border:'1px solid #ddd'}}>Slot ID</th>
                  <th style={{padding:10, border:'1px solid #ddd'}}>Date</th>
                  <th style={{padding:10, border:'1px solid #ddd'}}>Service Type</th>
                  <th style={{padding:10, border:'1px solid #ddd'}}>Start Time</th>
                  <th style={{padding:10, border:'1px solid #ddd'}}>End Time</th>
                  <th style={{padding:10, border:'1px solid #ddd'}}>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{padding:10, border:'1px solid #ddd'}}>1</td><td style={{padding:10, border:'1px solid #ddd'}}>2025-03-07</td><td style={{padding:10, border:'1px solid #ddd'}}>Car Wash</td><td style={{padding:10, border:'1px solid #ddd'}}>08:00 AM</td><td style={{padding:10, border:'1px solid #ddd'}}>09:00 AM</td><td style={{padding:10, border:'1px solid #ddd'}}>Available</td></tr>
                <tr><td style={{padding:10, border:'1px solid #ddd'}}>2</td><td style={{padding:10, border:'1px solid #ddd'}}>2025-03-07</td><td style={{padding:10, border:'1px solid #ddd'}}>Garage Service</td><td style={{padding:10, border:'1px solid #ddd'}}>09:00 AM</td><td style={{padding:10, border:'1px solid #ddd'}}>10:00 AM</td><td style={{padding:10, border:'1px solid #ddd'}}>Available</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
