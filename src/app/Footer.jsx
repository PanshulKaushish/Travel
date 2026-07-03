import React from 'react'
import logo from '../app/assets/logo.jpg'
import Image from 'next/image'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="text-center">
            <Image src={logo} alt="" />
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-3 text-center">
              <p className="f-para"><i className="fa-solid fa-phone"></i>+971 600 57 0007</p>
            </div>
            <div className="col-xxl-3 text-center">
              <p className="f-para"><i className="fa-solid fa-envelope"></i>ABCtravel@gmail.com</p>
            </div>
          </div>

          <div className="coll d-flex justify-content-center">
            <ul className="d-flex gap-4">
              <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Packages</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Locations</a></li>
              <li className="nav-item"><a href="#" className="nav-link">News</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Contact Us    </a></li>
            </ul>
          </div>

          <p className="para text-center">Privacy Policy  |  Terms and conditions</p>
        </div>
      </footer> 
      <div className="bg">
        <div className="container-fluid">
          <p className="fw-bold text-white mb-0 ps-4">All right reserved © 2026 OnTime</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
