import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import {Link} from 'react-router-dom'

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="auth">
        <button className='btn'>Login</button>
       
      </div>
    </nav>
    
   
  )
}
