import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import './Navbar.css'


function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/" style={{textDecoration:"none", color:"black"}}><h1>Holista</h1></Link>
                </div>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='contactNumber'>
                    <p style={{fontSize:"13px"}}>Call at any time</p>
                    <p><strong>+1 (123) 456-7890</strong></p>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar