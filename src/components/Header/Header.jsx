import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Dive into a World of Luxury and Fun</h2>
                <h1 className='text-white fw-6 header-title'>Welcome to  <span className='text-brown'>SpadeAce</span> Bringing the Best of Nepal and Australia to Your Doorstep!</h1>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'>Services</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header