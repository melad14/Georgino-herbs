import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
             <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item  active text-white">Contact</li>
                    </ol>    
                </div>
            </div>

      <div className="container-fluid contact overflow-hidden py-5">
  <div className="container py-5">
    <div className="row g-5 mb-5">
      <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
        <div className="sub-style">
          <h5 className="sub-title text-primary pe-3">Quick Contact</h5>
        </div>
        <h1 className="display-5 mb-4">Have Questions? Don't Hesitate to Contact Us</h1>
        <div className="d-flex border-bottom mb-4 pb-4">
          <i className="fas fa-map-marked-alt fa-4x text-primary bg-light p-3 rounded"></i>
          <div className="ps-3">
            <h5>Location</h5>
            <p>123, First Floor, 123 St Roots Terrace, Los Angeles 90010 Unitd States of America.</p>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-xl-6">
            <div className="d-flex">
              <i className="fas fa-tty fa-3x text-primary"></i>
              <div className="ps-3">
                <h5 className="mb-3">Quick Contact</h5>
                <div className="mb-3">
                  <h6 className="mb-0">Phone:</h6>
                  <Link to="" className="fs-5 text-primary">+012 3456 7890</Link>
                </div>
                <div className="mb-3">
                  <h6 className="mb-0">Email:</h6>
                  <Link to="" className="fs-5 text-primary">travisa@example.com</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex">
              <i className="fas fa-clone fa-3x text-primary"></i>
              <div className="ps-3">
                <h5 className="mb-3">Opening Hrs</h5>
                <div className="mb-3">
                  <h6 className="mb-0">Mon - Friday:</h6>
                  <Link to="" className="fs-5 text-primary">09.00 am to 07.00 pm</Link>
                </div>
                <div className="mb-3">
                  <h6 className="mb-0">Satday:</h6>
                  <Link to="" className="fs-5 text-primary">10.00 am to 05.00 pm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-3">
          <div className="me-4">
            <div className="bg-light d-flex align-items-center justify-content-center" style={{width: '90px', height: '90px', borderRadius: '10px'}}>
              <i className="fas fa-share fa-3x text-primary"></i>
            </div>
          </div>
          <div className="d-flex">
            <Link className="btn btn-secondary border-secondary me-2 p-0" href="">facebook <i className="fas fa-chevron-circle-right"></i></Link>
            <Link className="btn btn-secondary border-secondary mx-2 p-0" href="">twitter <i className="fas fa-chevron-circle-right"></i></Link>
            <Link className="btn btn-secondary border-secondary mx-2 p-0" href="">instagram <i className="fas fa-chevron-circle-right"></i></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
        <div className="sub-style">
          <h5 className="sub-title text-primary pe-3">Let's Connect</h5>
        </div>
        <h1 className="display-5 mb-4">Send Your Message</h1>
        <form>
          <div className="row g-4">
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                <label htmlFor="phone">Your Phone</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="project" placeholder="Project" />
                <label htmlFor="project">Your Project</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '160px'}}></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</div>
        </>
    )
}