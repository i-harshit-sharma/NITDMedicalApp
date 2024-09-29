// src/Services.jsx
import React from 'react';
import nitd from '../../assets/service.jpeg';
import './Services.css';

const servicesData = [
  {
    title: "General Health Check-ups",
    description: "Comprehensive evaluations to monitor your overall health."
  },
  {
    title: "Prescription Services",
    description: "Medication management and prescription refills."
  },
  {
    title: "Vaccination Programs",
    description: "Immunization services to protect against various diseases."
  },
  {
    title: "Mental Health Counseling",
    description: "Support and counseling services for mental wellness."
  },
  {
    title: "Emergency Care",
    description: "Immediate care for urgent medical situations."
  },
  {
    title: "Health Education Workshops",
    description: "Workshops on health awareness and prevention strategies."
  },
  {
    title: "Nutritional Counseling",
    description: "Guidance on healthy eating and lifestyle choices."
  },
  {
    title: "Physiotherapy Services",
    description: "Rehabilitation and therapy for physical injuries."
  }
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Banner Section */}
      <div className="service-banner">
        <img src={nitd} alt="NIT Delhi Health Center" />
        <h1>Comprehensive health services tailored for NIT Delhi students, staff, and their families.</h1>
      </div>

      {/* Services List Section */}
      <section className="services-list">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="services-contact">
        <h2>Contact Us</h2>
        <p>If you have questions about our services or want to schedule an appointment, please reach out:</p>
        <ul>
          <li>Email: <a href="mailto:healthcenter@nitdelhi.ac.in">healthcenter@nitdelhi.ac.in</a></li>
          <li>Phone: +91-11-12345678</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;
