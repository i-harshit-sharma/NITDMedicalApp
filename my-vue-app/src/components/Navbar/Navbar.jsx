import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <div className="logo-section">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="logo-text">
        <h2>Health Center NITD</h2>
      </div>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="auth">
        <button className='btn'>Login</button>
       
      </div>
    </nav>
   
  )
}
