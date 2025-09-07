import React, { useEffect } from 'react'
import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function Products() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Products</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">Products</li>
                    </ol>    
                </div>
            </div>

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
        </>
    )
}