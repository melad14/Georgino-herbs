import React, { useEffect } from 'react'
import about2 from '../../img/about-2.png';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">About</li>
                    </ol>    
                </div>
            </div>


      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5" data-aos="fade-left" data-aos-delay="100">
              <div className="bg-light rounded">
                <img src={about2} className="img-fluid w-100" style={{ marginBottom: '-7px' }} alt="Visa process" />
              </div>
            </div>
            <div className="col-xl-7" data-aos="fade-right" data-aos-delay="300">
              <h5 className="sub-title pe-3 text-primary">About the company</h5>
              <h1 className="display-5 mb-4">A Journey from Local Market to Global Exporter.</h1>
              <p className="mb-4">
                 goregeno & co. is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.                </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-map-marked-alt fa-3x text-secondary"></i>
                  <h5 className="ms-4">We have a variety of products.</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-3x text-secondary"></i>
                  <h5 className="ms-4">We strive to satisfy our customers.</h5>
                </div>
                <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <i className="fas fa-ticket-alt fa-4x text-primary"></i>
                    </div>
                    <h1 className="display-5 fw-bold mb-2">34</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Offer 100% Genuine Assistance</p>
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Faster & Reliable Execution</p>
                    <p className="text-primary h6 mb-3"><i className="fa fa-check-circle text-secondary me-2"></i> Accurate & Expert Advice</p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                      <Link to="/contact" className="position-relative" data-aos="tada" data-aos-delay="900">
                        <i className="fa fa-phone-alt text-primary fa-3x"></i>
                        <div className="position-absolute" style={{ top: 0, left: '25px' }}>
                          <span><i className="fa fa-comment-dots text-secondary"></i></span>
                        </div>
                      </Link>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="text-primary">Have any questions?</span>
                      <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>Free: +201205484259</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Counter Facts Start */}
      <div className="container-fluid counter-facts py-5 bg-light">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-passport  text-secondary"></i>
                </div>
                <div className="counter-content">
                  <h3>satisfied customers
                  </h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fw-bold display-6">31</span>
                    <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="300">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-users text-secondary"></i>
                </div>
                <div className="counter-content">
                  <h3>Team Members</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fw-bold display-6">37</span>
                    <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="500">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-user-check text-secondary"></i>
                </div>
                <div className="counter-content">
                  <h3>quality of service
                  </h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fw-bold display-6">99%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="700">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-handshake text-secondary"></i>
                </div>
                <div className="counter-content">
                  <h3>Success Rates</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fw-bold display-6">98</span>
                    <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Facts End */}

 <div className="container-fluid features overflow-hidden py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
            </div>
            <h1 className="display-5 mb-4">Connecting businesses, ideas, and people for greater impact.</h1>
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <i className="fas fa-dollar-sign fa-4x text-primary"></i>
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Reliable international shipping</h5>
                  <p className="mb-3">We provide efficient and fast export solutions to all over the world</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <i className="fas fa-globe fa-4x text-primary"></i>
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">International export standards</h5>
                  <p className="mb-3">We adhere to international standards in agriculture, storage, and shipping.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <i className="fas  fa-globe-europe fa-4x text-primary"></i>
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">Competitive prices</h5>
                  <p className="mb-3">We offer the best prices with high-quality assurance..</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="700">
              <div className="feature-item text-center p-4">
                <div className="feature-icon p-3 mb-4">
                  <i className="fas fa-users fa-4x text-primary"></i>
                </div>
                <div className="feature-content d-flex flex-column">
                  <h5 className="mb-3">High-quality products</h5>
                  <p className="mb-3">We ensure premium quality in all our agricultural exports.</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
        </>
    )
}