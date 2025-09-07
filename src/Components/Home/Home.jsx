import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Importing images from the img directory
import carousel1 from '../../img/Website-Header-latest.png';
import carousel2 from '../../img/green-fresh-basil-stone-background_70626-8490.jpg';
import about2 from '../../img/about-2.png';
import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      {/* Carousel Start */}
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <link data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></link>
            <link data-bs-target="#carouselId" data-bs-slide-to="1"></link>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={carousel1} className="img-fluid" alt="Visa consultation" />
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                  <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4" data-aos="fade-up" data-aos-delay="300">
                    Discover the Exquisite Flavours!</h1>
                  <p className="text-white mb-4 mb-md-5 fs-5" data-aos="fade-up" data-aos-delay="500">
                    Georgino herbs is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.
                  </p>
                  <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" data-aos="fade-up" data-aos-delay="700" to="/service">More Details</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="img-fluid" alt="Visa services" />
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                  <h1 className="display-1 text-capitalize text-white mb-3 mb-md-4" data-aos="fade-up" data-aos-delay="300">
                    Discover the Exquisite Flavours!</h1>
                  <p className="text-white mb-4 mb-md-5 fs-5" data-aos="fade-up" data-aos-delay="500">
                    Georgino herbs is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.
                  </p>

                  <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" data-aos="fade-up" data-aos-delay="700" to="/service">More Details</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-secondary" data-aos="fade-left" data-aos-delay="200" aria-hidden="false"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-secondary" data-aos="fade-right" data-aos-delay="200" aria-hidden="false"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

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
                Georgino herbs is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.                </p>
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
                      <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>Free: +0123 456 7890</span>
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

      {/* products Start */}
     <div className="container-fluid service overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">our products</h5>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod1} className="img-fluid w-100 rounded" alt="Dehydrated Garlic" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Dehydrated Garlic
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">Dehydrated Garlic</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Dehydrated Garlic
                          Allium sativum
                          Available Supplying Forms


                          Whole
                          Powder
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic
                        </p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod2} className="img-fluid w-100 rounded" alt="Dehydrated Onion" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Dehydrated Onion
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">Dehydrated Onion
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">Dehydrated Onion
                          Allium cepa
                          Available Supplying Forms


                          Kibbled
                          Minced
                          Granules
                          Powder
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic.</p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod3} className="img-fluid w-100 rounded" alt="Liquorice roots" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Liquorice roots

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Liquorice roots
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Liquorice roots
                          Glycerriza glabra
                          Available Supplying Forms


                          Whole
                          Cut
                          TBC
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic
                        </p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod4} className="img-fluid w-100 rounded" alt="Rosemary" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Rosemary
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Rosemary
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Rosemary
                          Rosmarinus officinalis
                          Available Supplying Forms


                          Cut (different cut sizes)
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic
                        </p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod5} className="img-fluid w-100 rounded" alt="Lemon Grass" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Lemon Grass
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Lemon Grass
                       </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Lemon Grass
                          Cymbopogon citratus
                          Available Supplying Forms


                          Cut (different cut sizes)
                          TBC
                          Powder
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic
                        </p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{height: '250px', overflow: 'hidden'}}>
                    <img src={prod6} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{height: '250px', objectFit: 'cover'}} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Verbascum (mullein)
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Verbascum (mullein)</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">
                          Verbascum (mullein)
                          Verbascum thapsus
                          Available Supplying Forms


                          Flowers
                          Pesticides Status


                          Conventional (Out of Stock)
                          .</p>
                        <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Features Start */}
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
      {/* Features End */}
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
  );
}