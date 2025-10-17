import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/about.css'
import aboutBg from '../assets/images/about.jpg'
import carWashBg from '../assets/images/Car-wash-al-quoz-best.jpeg'
import garageBg from '../assets/images/carousel-1.jpg'
import mechanicImg from '../assets/images/Screenshot 2025-01-19 181647.png'
import testimonial1 from '../assets/images/testimonial-3.jpg'
import testimonial2 from '../assets/images/testimonial-2.jpg'

export default function About(){
  return (
    <div>
      <Header />
      <main>
        <section className="about-us" style={{ backgroundImage: `url(${aboutBg})` }}>
          <div className="section-overlay" />
          <div className="service-container">
            <div className="service-box reduced-height" style={{ backgroundImage: `url(${carWashBg})` }}>
              <div className="box-overlay" />
              <div className="box-content">
                <h3>Car Wash Services</h3>
                <p>Experience our car wash services with specialized treatments to keep your car looking brand new.</p>
              </div>
            </div>
            <div className="service-box reduced-height" style={{ backgroundImage: `url(${garageBg})` }}>
              <div className="box-overlay" />
              <div className="box-content">
                <h3>Garage Services</h3>
                <p>Our garage services include full vehicle diagnostics, advanced repairs, and maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="header">OUR VALUES</div>
          <div className="subheader">We are working with an aim to expand into the global market and, most importantly, further refine and improve the quality of the services that we provide.</div>
          <div className="vision"><h2>OUR VISION</h2><p>To be a leading multi-brand automotive service center in the region with a focus on high customer satisfaction through the latest technology.</p></div>
          <div className="mission"><h2>OUR MISSION</h2><p>Our mission is to enrich the customer experience through our people, products, and services with best practices and the latest technology.</p></div>

          <section className="statistics">
            <div className="stat"><h3>50+</h3><p>Service Points</p></div>
            <div className="stat"><h3>30+</h3><p>Engineers and Workers</p></div>
            <div className="stat"><h3>500+</h3><p>Completed Projects</p></div>
          </section>

          <section id="team" className="team-container">
            <h2>Our Engineers & Workers</h2>
            <div className="team-profiles">
              <div className="profile">
                <img src={testimonial1} alt="B. Kahathuduwa"/>
                <h3>B. Kahathuduwa</h3>
                <p>CEO</p>
              </div>
              <div className="profile">
                <img src={testimonial2} alt="D.H.B.Y. Ranasinghe"/>
                <h3>D.H.B.Y. Ranasinghe</h3>
                <p>Engineer</p>
              </div>
            </div>
          </section>

          <section className="image-text">
            <div className="content">
              <div className="image-section">
                <img src={mechanicImg} alt="Mechanic and mobile app"/>
              </div>
              <div className="text-section">
                <h2>Locations We Cover</h2>
                <h1>Anywhere in Sri Lanka You are Covered</h1>
                <p>Our unique mobile app, created entirely by talented young individuals in Sri Lanka, enables you to locate a trustworthy garage or mechanic in the nearest vicinity within the country.</p>
                <button className="download-button">Download Now</button>
              </div>
            </div>
          </section>

          <div className="client-reviews"><h2>CLIENT REVIEWS</h2><p>We value every car owner and recognize the challenges involved in maintaining a vehicle... </p>
            <div className="review">
              <div className="review-card"><h3>Shukri Azeez</h3><p className="car-brand">BMW</p><p>"the best recommended place..."</p><p className="rating">Punctuality</p><div className="stars"><span>★★★★★</span></div></div>
              <div className="review-card"><h3>Prince Suresh Jayasooriya</h3><p className="car-brand">Suzuki WagonR</p><p>"The best place to all kind of vehicle works..."</p><p className="rating">Highly recommended</p><div className="stars"><span>★★★★★</span></div></div>
              <div className="review-card"><h3>K. Janagan</h3><p className="car-brand">Toyota Aqua</p><p>"Really good service by them for tuneup..."</p><p className="rating">Better Technician</p><div className="stars"><span>★★★★</span></div></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
