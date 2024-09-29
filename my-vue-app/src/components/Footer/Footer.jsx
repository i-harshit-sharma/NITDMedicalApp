import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // For icons
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About NIT Delhi Health Care</h2>
          <p>
            The NIT Delhi Health Centre provides health services to students, faculty, and staff. We aim to deliver top-quality healthcare and maintain a database of student and employee health records for effective management.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><FaPhoneAlt className="icon" /> +91-11-33861000</p>
          <p><FaEnvelope className="icon" /> healthcare@nitdelhi.ac.in</p>
          <p><FaMapMarkerAlt className="icon" /> Zone P1, National Institute of Technology, Plot No. FA7, GT Karnal Rd, Garthi Khurad, Bakoli, Delhi, 110036</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NIT Delhi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
