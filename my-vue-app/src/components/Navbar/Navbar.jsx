import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { About } from '../About/About'

export const Navbar = () => {
  return (
    <Router>
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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="auth">
        <button className='btn'>Login</button>
       
      </div>
    </nav>
    <Routes>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </Router>
   
  )
}
