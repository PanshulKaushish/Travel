import React from 'react'
import logo from '../app/assets/logo.jpg'
import Image from 'next/image'

function Navbar() {
    return (
        <div>
            <header className="custom-navbar">
                <nav className="navbar navbar-expand-lg py-3">
                    <div className="container 1">
                        <a href="#">
                            <Image className='logo' src={logo} alt="logo" />
                        </a>

                        <div className="collapse navbar-collapse justify-content-center">
                            <ul className="navbar-nav gap-4">
                                <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Packages</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Locations</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">News</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Contact Us    </a></li>
                            </ul>
                        </div>

                        <div className='navbar-nav align-items-center gap-3'>
                            <a href="#" className="nav-link"><i className="fa-solid fa-list-check"></i></a>
                            <a href="#" className="nav-link"><i className="fa-solid fa-magnifying-glass"></i></a>
                            <a href="#" className="nav-link"><i className="fa-regular fa-user"></i></a>
                            <a href="#" className="navlink"><button className='nav-btn'>Apply Online</button></a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
