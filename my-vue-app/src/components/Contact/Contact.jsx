import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import nitd from '../../assets/contact.jpg';

const doctors = [


  {
    name: 'Dr. Kamlesh Gurjar',
    department: 'General Physician',
    email: 'kamlesh.gurjar@nitdelhi.ac.in',
    phone: '+91-9876543210',
  },

  {
    name: 'Dr. Harshit Fadnavis',
    department: 'Gynecology',
    email: 'harshit.fadnavis@nitdelhi.ac.in',
    phone: '+91-9876543210',
  },

  
  {
    name: 'Dr. Bhavay Kataria',
    department: 'General Physician',
    email: 'bhavay.kataria@nitdelhi.ac.in',
    phone: '+91-9876543210',
  },
  {
    name: 'Dr. Rajesh Kumar',
    department: 'Pediatrics',
    email: 'rajesh.kumar@nitdelhi.ac.in',
    phone: '+91-9876543211',
  },
  {
    name: 'Dr. Sneha Verma',
    department: 'Gynecology',
    email: 'sneha.verma@nitdelhi.ac.in',
    phone: '+91-9876543212',
  },
  {
    name: 'Dr. Arvind Singh',
    department: 'Cardiology',
    email: 'arvind.singh@nitdelhi.ac.in',
    phone: '+91-9876543213',
  },

];

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-banner">
        <img src={nitd} alt="NIT Delhi Health Center" />
        <h1>Get in touch with NIT Delhi Health Center for appointments, queries, or support.</h1>
      </div>

      <div className="contact-doctors">
        <h2>Contact Us</h2>
        <div className="doctor-cards">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p><strong>Department:</strong> {doctor.department}</p>
              <p><FaPhoneAlt /> {doctor.phone}</p>
              <p><FaEnvelope /> <a href={`mailto:${doctor.email}`}>{doctor.email}</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
