"use client";
import { useEffect, useState } from 'react';
import React from 'react'

function Hero() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://travel-wfq1.onrender.com/api/home")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-head">Your One-Stop Shop <br /> <span> For All Government Services</span></h1>
          <p className="hero-para">Simplifying every government transaction — from typing to approvals — under one trusted roof.</p>
          <h4 className="hero-subhead">We Make It Happen!</h4>
          <div className="hr">
            <button className="hero-btn">Talk To An Expert</button>
          </div>
        </div>
      </section>

      <section className="sec1">
        <div className="container">
          <h4 className="hero-subhead">Main Services</h4>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="ser">
              <div className="service">
                <img src={data.img1} alt="" />
                <p className="sevice-p">Amer Services</p>
              </div>
            </div>

            <div className="ser">
              <div className="service">
                <img src={data.img2} alt="" />
                <p className="sevice-p">Emirates ID</p>
              </div>
            </div>

            <div className="ser">
              <div className="service">
                <img src={data.img3} alt="" />
                <p className="sevice-p">Dubai Economy and Tourism...</p>
              </div>
            </div>

            <div className="ser">
              <div className="service">
                <img src={data.img4} alt="" />
                <p className="sevice-p">UAE Residency Visa</p>
              </div>
            </div>

            <div className="col-xxl-2">
              <div className="service">
                <img src={data.img5} alt="" />
                <p className="sevice-p">Real Estate Trustee Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="head">
              <h2 className="service-head"> All Services</h2>
              <p className="para">Choose Service</p>
            </div>
            <form className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>

              <input type="text" placeholder="Search Your Service" className="search-input" />

              <button className="search-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>

          <div className="row align-items-center">
            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img6} alt="" />
                </div>
                <h4 className="service-subhead">Mobile Medical Examination For...</h4>
                <p className="para">Get medical examination for residency now at your door step</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img1} alt="" />
                </div>
                <h4 className="service-subhead">Amer Serices</h4>
                <p className="para">Get fast-track immigration and residency visa services!</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img7} alt="" />
                </div>
                <h4 className="service-subhead">Tasheel</h4>
                <p className="para">As part of our strategic partnership with Tasheel, we provide all MOHRE services</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img2} alt="" />
                </div>
                <h4 className="service-subhead">Emirates ID</h4>
                <p className="para">We offer Emirates ID typing And Biometric Services</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img3} alt="" />
                </div>
                <h4 className="service-subhead">Dubai Economy and Tourism (DET)</h4>
                <p className="para">We are a Dubai Economy & Tourism authorized entity providing new and renewed trade licenses.</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img8} alt="" />
                </div>
                <h4 className="service-subhead">EHS Services</h4>
                <p className="para">We are authorized to perform Medical tests for residency, Embassy Medical test, issuance of Health Cards and Birth Certificates.</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img9} alt="" />
                </div>
                <h4 className="service-subhead">RTA Services</h4>
                <p className="para">"Certified by RTA, OnTime Government Services provides vehicle branding solutions, RTA license approvals, vehicle...</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="serv">
                <div className="service-image">
                  <img src={data.img10} alt="" />
                </div>
                <h4 className="service-subhead">Translation Services</h4>
                <p className="para">In collaboration with OnTime Government Services offers extensive and accurate legal & government...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-6">
              <div className="bg-1">
                <div className="container">
                  <div className="about-img">
                    <img src={data.img11} alt="" />
                  </div>
                  <h2 className="about-head">About Us</h2>
                  <h4 className="about-subhead">The first private company in the UAE to outsource Government Services.</h4>
                  <p className="about-para">
                    To become a successful entrepreneur, you must have passion, believe in your vision, and earn the trust of others. Success requires learning, patience, and persistence—along with the willingness to grow from every experience. There will always be someone more knowledgeable to learn from, and opportunities worth pursuing, but the true difference lies in how you navigate every challenge.
                  </p>
                  <p className="about-para">
                    Keep learning. Stay dedicated. Show resilience. And make every opportunity count.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="bg-2">
                <div className="about-img">
                  <img src={data.img12} alt="" />
                </div>
                <h2 className="ex-head">20+ Years in the Industry</h2>
                <p className="ex-para">
                  Since 2003, OnTime Government Services has been the trusted provider for essential government transactions across Dubai. We deliver a seamless experience through both online and walk-in services, supporting individuals and corporates with efficiency, accuracy, and exceptional customer care.
                </p>
                <p className="ex-para">
                  With several Happiness Centers across Dubai, we proudly serve over one million customers every year—helping them complete their government transactions smoothly and confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Our One-shop Centers</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Our Specialized Branches</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-xxl-4">
                  <div className="locations">
                    <img src={data.img23} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">Mazaya Center</h4>
                      <p className="location-para">One-stop shop faor all government services</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="locations">
                    <img src={data.img24} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">Al Baraha Smart Center for Medical Examination and Government Services</h4>
                      <p className="location-para">Government services with integrated medical support</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4">
                  <div className="locations">
                    <img src={data.img25} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">Mazaya Center</h4>
                      <p className="location-para">Central hub for government services in Oud Metha.</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row">
                <div className="col-xxl-3">
                  <div className="locations">
                    <img src={data.img24} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">OGS Bur Dubai</h4>
                      <p className="location-para">Ground floor, Naseer Lootah Building, Opp. Pakistan Consulate, Bur Dubai,</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3">
                  <div className="locations">
                    <img src={data.img25} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">OGS Al Manara</h4>
                      <p className="location-para">Sheikh Zayed Road, beside Al Safa Metro Station, inside Al Manara</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3">
                  <div className="locations">
                    <img src={data.img26} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">OnTime Government Services</h4>
                      <p className="location-para">This OnTime Government Services branch specializes in RTA services,</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3">
                  <div className="locations">
                    <img src={data.img27} alt="" />
                    <div className="loc-con">
                      <h4 className="location-head">OnTime Government Services</h4>
                      <p className="location-para">A dedicated center for Ministry of Health and Prevention (MOHAP).</p>
                      <button className="loc-btn">Locate Center  <i className="fa-solid fa-map-location-dot"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2">
        <div className="container">
          <h2 className="about-head text-center mb-5">Why OnTime</h2>
          <div className="row">
            <div className="col-xxl-3">
              <div className="box">
                <div className="why-img text-center">
                  <img src={data.img16} alt="" />
                </div>
                <h4 className="about-subhead text-center">Expert Consultants</h4>
                <p className="about-para text-center fs-6">Our experienced consultants are always ready to guide you and answer all your questions with clarity and confidence.</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="box">
                <div className="why-img text-center">
                  <img src={data.img17} alt="" />
                </div>
                <h4 className="about-subhead text-center">Results-Oriented</h4>
                <p className="about-para text-center fs-6">We are committed to delivering fast, accurate, and efficient solutions to ensure your transactions are completed without delays.</p>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="box">
                <div className="why-img text-center">
                  <img src={data.img18} alt="" />
                </div>
                <h4 className="about-subhead text-center">Proficient Team</h4>
                <p className="about-para text-center fs-6">Our team of trained professionals works with precision and care to provide you with the best experience at every OnTime Center.</p>
              </div>
            </div>

            <div className="col-xxl-3 text-center">
              <div className="box-1">
                <div className="why-img">
                  <img src={data.img19} alt="" />
                </div>
                <h4 className="about-subhead text-center">One-Stop Shop</h4>
                <p className="about-para text-center fs-6">Everything you need in one place. Visit any of our centers and complete all your government transactions under one trusted roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <h2 className="rev-head text-center">Testimonials</h2>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000" >
                <div className="row">
                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                      </div>
                      <p className="ex-para">
                        A big thank you to Ms. Hawra Ishaq for assisting at the counter. She was very kind, polite, efficient, and very helpful. Truly a treasure to the company. Everyone at OnTime Government Services at Oud Metha was kind and helpful. Thank you to everyone.
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Sarah Johnson</p>
                          <p className="ex-para">AI Baraha Center </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="ex-para">
                        Very nice personality, is a warm person, brilliant person, very helpful, quick, and responsive, Mr. Ahmed Nagi, the most excellent personality I have ever met.
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Abdullah Arshad Qazi</p>
                          <p className="ex-para">AI Baraha Center </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <div className="row">
                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="ex-para">
                        Excellent service! The staff at OnTime Government Services made my visa renewal process so smooth and hassle-free. Highly recommended for anyone needing government services in Dubai.
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Ahmed Hassan</p>
                          <p className="ex-para">Oud Metha Center</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p className="ex-para">
                        Professional and efficient service. The team helped me with my Emirates ID renewal and the whole process was completed in no time. Great customer service!
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Sukhminder Kaur</p>
                          <p className="ex-para">Oud Metha Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <div className="row">
                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="ex-para">
                        Outstanding experience! The staff is knowledgeable and very helpful. They guided me through every step of my business setup. Thank you OnTime!
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Ahmed Hassan</p>
                          <p className="ex-para">Oud Metha Center</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-6">
                    <div className="review">
                      <div className="rev-img">
                        <img src={data.img21} alt="" />
                      </div>
                      <div className="rev-icons">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <p className="ex-para">
                        Just the right place for the right ADVICE in any LEGAL MATTERS. Very friendly and efficient team, who are working there in OnTime Oud Metha Road Branch. Dubai is a land of opportunities & good people.
                      </p>
                      <div className="user-name d-flex gap-5 align-items-center">
                        <img src={data.img22} alt="" />
                        <div className="name">
                          <p className="service-subhead">Ruchikaa Panday</p>
                          <p className="ex-para">Oud Metha Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="sec3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6">
              <h2 className="about-head mb-4">Contact Us for More Information</h2>
              <p className="about-para mb-5">
                Have a question or need assistance with your government transactions? Our team is here to support you every step of the way. Simply fill in your details below, and we will get back to you as soon as possible.
              </p>
              <div className="row">
                <div className="col-xxl-6">
                  <div className="formong">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                </div>

                <div className="col-xxl-6">
                  <div className="formong">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>

                <div className="col-xxl-6">
                  <div className="formong">
                    <input type="text" className="form-control" placeholder="Phone No." />
                  </div>
                </div>

                <div className="col-xxl-6">
                  <div className="formong">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>

                <div className="col-xxl-6">
                  <div className="formong">
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>
                        Preferred Service*
                      </option>
                      <option>Mobile Medical Examination for Residency</option>
                      <option>Amer Services</option>
                      <option>Tasheel</option>
                      <option>Emirates ID</option>
                      <option>Dubai Economy and Tourism (DET)</option>
                      <option>EHS Services</option>
                      <option>RTA Services</option>
                      <option>Translation Services</option>
                      <option>Attestation Services & Visa Services</option>
                      <option>DHA Medical Applications (DHA)</option>
                      <option>Ministry Of Health & Prevention (MOHAP) Services</option>
                      <option>UAE Residency Visa (Other Emirates)</option>
                      <option>Real Estate Trustee Services</option>
                      <option>Insurance Services</option>
                      <option>OnTime Business Setup</option>
                    </select>
                  </div>
                </div>

                <div className="col-xxl-6">
                  <div className="formong">
                    <select className="form-select" defaultValue="">
                      <option value="" disabled>
                        Emirate
                      </option>
                      <option>Dubai</option>
                      <option>Abu Dhabi</option>
                      <option>Sharjah</option>
                    </select>
                  </div>
                </div>

                <div className="col-xxl-12">
                  <div className="formong">
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="Message/Request Details"
                    ></textarea>
                  </div>
                </div>

                <div className="col-xxl-12">
                  <div className="formong">
                    <div className="radio-text-form">
                      <label className="me-3">Preferred Contact Method:</label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactMethod"
                          id="whatsapp"
                        />
                        <label className="form-check-label" htmlFor="whatsapp">
                          WhatsApp
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactMethod"
                          id="phone"
                        />
                        <label className="form-check-label" htmlFor="phone">
                          Phone
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="contactMethod"
                          id="email-method"
                        />
                        <label className="form-check-label" htmlFor="email-method">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12">
                  <div className="formong_from">
                    <button type="submit" className="btn btn-primary">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="form-img">
                <img src={data.img20} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
