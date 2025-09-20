import React, { useEffect } from 'react'
import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';
import prod7 from '../../img/1-14.jpg';
import prod8 from '../../img/1-13.jpg';
import prod9 from '../../img/1-12-scaled.jpg';
import prod10 from '../../img/1.jpeg';
import prod11 from '../../img/dried-spinach-leaf-1663919429-6554279.jpg';
import prod12 from '../../img/1-11.jpg';
import prod13 from '../../img/dried-senna-leaves-500x500-1.webp';
import prod14 from '../../img/1-10.jpg';
import prod15 from '../../img/1-9.jpg';
import prod16 from '../../img/1-8.jpg';
import prod17 from '../../img/21297p__33295.1299860271.1280.1280.jpg';
import prod18 from '../../img/dried-moringa-lavender-by-the-bay_460x-300x300.jpg';
import prod19 from '../../img/lemon_balm_2019-02-04__92395.jpg';
import prod20 from '../../img/1-7.jpg';
import prod21 from '../../img/moroheiya1-scaled.jpg';
import prod22 from '../../img/1-6.jpg';
import prod23 from '../../img/1-5.jpg';
import prod24 from '../../img/1-4.jpg';
import prod25 from '../../img/Seeds-fenugreek.jpeg';
import prod26 from '../../img/2-4.jpg';
import prod27 from '../../img/2-3.jpg';
import prod28 from '../../img/2-2.jpg';
import prod29 from '../../img/1-3.jpg';
import prod30 from '../../img/2-1.jpg';
import prod31 from '../../img/2-300x300.png';
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod1} className="img-fluid w-100 rounded" alt="Dehydrated Garlic" style={{ height: '250px', objectFit: 'cover' }} />
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod2} className="img-fluid w-100 rounded" alt="Dehydrated Onion" style={{ height: '250px', objectFit: 'cover' }} />
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod3} className="img-fluid w-100 rounded" alt="Liquorice roots" style={{ height: '250px', objectFit: 'cover' }} />
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod4} className="img-fluid w-100 rounded" alt="Rosemary" style={{ height: '250px', objectFit: 'cover' }} />
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod5} className="img-fluid w-100 rounded" alt="Lemon Grass" style={{ height: '250px', objectFit: 'cover' }} />
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod6} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
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
            {/* 6666666 */}


            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod7} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">


                          Hibiscus subdarifa

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">

                        Hibiscus subdarifa</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Hibiscus subdarifa
                          Available Supplying Forms


                          Flowers
                          TBC
                          Fines
                          Siftings (different sizes)
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic
                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod8} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Calendula (Marigold)
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Calendula (Marigold)
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Calendula (Marigold)
                          Calendula officinalis
                          Available Supplying Forms


                          Flowers
                          Petals
                          TBC
                          Powder
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic (Out of Stock)
                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod9} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Chamomila matricaria
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Chamomila matricaria</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Chamomila matricaria
                          Available Supplying Forms


                          Flowers
                          Whole
                          Pollen
                          TBC
                          Stems
                          Petals
                          Industrial
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic (Out of Stock)

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod10} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Thymus vulgare

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Thymus vulgare
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Thyme
                          Thymus vulgare
                          Available Supplying Forms


                          Rubbed
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic (Out of Stock)

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod11} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Spinacia oleracea

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Spinacia oleracea
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Spinach
                          Spinacia oleracea
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional (Out of Stock)
                          AS Reg. EC396/2005 (Out of Stock)
                          Organic (Out of Stock)

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod12} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Spearmint
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Spearmint</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Spearmint
                          Mentha spicata
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod13} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Senna
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Senna</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Senna
                          Senna alexandrina
                          Available Supplying Forms


                          Whole leaves
                          Crushed
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod14} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Sage
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Sage</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Sage
                          Salvia officinalis
                          Available Supplying Forms


                          Whole
                          Cut
                          Rubbed
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic (Out of Stock)

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod15} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Peppermint
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Peppermint</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Peppermint
                          Mentha piperita
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod16} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Parsley (Flat & Curly)

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Parsley (Flat & Curly)
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Parsley (Flat & Curly)
                          Petroselinum crispum
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional Sun Dried
                          As Reg. EC396/2005 Sun Dried (Out of Stock)
                          Conventional Machine Dried (Out of Stock)
                          AS Reg. EC396/2005 Machine Dried (Out Of Stock)


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod17} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Oregano
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Oregano</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">

                          Oregano
                          Origanum vulgaris
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod18} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Moringa oleifera

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Moringa oleifera
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Moringa
                          Moringa oleifera
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod19} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Melissa officinalis

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Melissa officinalis
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Melissa
                          Melissa officinalis
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod20} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Origanum majorana

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Origanum majorana
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Marjoram
                          Origanum majorana
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod21} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Jew’s Mallow (Molokhia)

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Jew’s Mallow (Molokhia)
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Jew’s Mallow (Molokhia)
                          Corchorus olitorious
                          Available Supplying Forms


                          Whole leaves
                          Crushed
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod22} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Dill
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Dill</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Dill
                          Anethum graveolens
                          Available Supplying Forms


                          Tips
                          Fines
                          Pesticides Status


                          Conventional Sun Dried (Out of Stock)
                          As Reg. EC396/2005 Sun Dried (Out of Stock)
                          Conventional Machine Dried (Out of Stock)
                          AS Reg. EC396/2005 Machine Dried (Out Of Stock)


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod23} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Cilantro
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Cilantro</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Cilantro
                          Coriandrum sativum
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional Sun Dried (Out of Stock)
                          As Reg. EC396/2005 Sun Dried (Out of Stock)
                          Conventional Machine Dried (Out of Stock)
                          AS Reg. EC396/2005 Machine Dried (Out Of Stock)

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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod24} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Basil
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Basil</h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Basil
                          Ocimum basilicum
                          Available Supplying Forms


                          Large cut
                          Normal Cut
                          Fines
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod25} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Fenugreek
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Fenugreek                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Fenugreek
                          Trigonella foenum-graecum
                          Available Supplying Forms


                          Colour sorted
                          ASTA Quality
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod26} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Fennel
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Fennel                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">



                          Fennel
                          Foeniculum vulgare
                          Available Supplying Forms


                          Colour sorted
                          ASTA Quality
                          Cracked
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod27} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Cumin

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Cumin
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Cumin
                          Cuminum cyminum
                          Available Supplying Forms


                          Colour sorted
                          ASTA Quality
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod28} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Coriander

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Coriander
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">



                          Coriander
                          Coriandrum sativa
                          Available Supplying Forms


                          Colour sorted
                          ASTA Quality
                          Splits
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod29} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Caraway
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Caraway                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Caraway
                          Carum carvi
                          Available Supplying Forms


                          Colour sorted
                          ASTA Quality
                          Cracked
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic


                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod30} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Black Cumin

                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Black Cumin
                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">


                          Black Cumin
                          Nigella sativum
                          Available Supplying Forms


                          Color sorted
                          ASTA Quality
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005
                          Organic

                          .</p>
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
                  <div className="service-img" style={{ height: '250px', overflow: 'hidden' }}>
                    <img src={prod31} className="img-fluid w-100 rounded" alt="Verbascum (mullein)" style={{ height: '250px', objectFit: 'cover' }} />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <Link to="/service" className="h4 text-white mb-0">
                          Anise
                        </Link>
                      </div>
                      <Link className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" to="/contact">contact us</Link>
                    </div>
                    <div className="service-content pb-4">
                      <Link to="/service"><h4 className="text-white mb-4 py-3">
                        Anise                      </h4></Link>
                      <div className="px-4">
                        <p className="mb-4">



                          Anise
                          Pimpinella anisum
                          Available Supplying Forms


                          Color sorted
                          ASTA Quality
                          Ground
                          Pesticides Status


                          Conventional
                          AS Reg. EC396/2005


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