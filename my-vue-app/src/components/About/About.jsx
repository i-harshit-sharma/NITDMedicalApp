import React from 'react';
import nitd from '../../assets/nitd.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <img src={nitd} alt="NIT Delhi Health Center" />
        <h1>Welcome to NIT Delhi Health Center, committed to your health and well-being.</h1>
      </div>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At the NIT Delhi Health Center, we are dedicated to ensuring the well-being of our students and faculty members. 
          Our mission is to provide comprehensive healthcare services that foster a healthy and productive environment for all.
        </p>
        
        <h2>Who We Are</h2>
        <p>
          Established to cater to the diverse healthcare needs of the NIT Delhi community, we offer a range of medical services aimed at promoting health, 
          preventing illness, and enhancing the quality of life for students, faculty, and staff. Our experienced healthcare professionals are committed to providing 
          personalized and compassionate care.
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>General Health Check-ups</li>
          <li>Emergency Medical Services</li>
          <li>Nutrition and Dietary Counseling</li>
          <li>Mental Health Support and Counseling</li>
          <li>Preventive Care and Vaccinations</li>
          <li>Health Education Workshops</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          The NIT Delhi Health Center is conveniently located within the campus, making it easily accessible for students and faculty. 
          We understand the unique health challenges faced by our academic community and strive to create an inclusive environment that supports 
          mental and physical wellness. Our commitment to quality care, patient education, and health promotion makes us a trusted partner in your health journey.
        </p>

        <h2>Get Involved</h2>
        <p>
          We encourage all students and faculty to take an active role in their health. Join us for our regular health workshops, awareness campaigns, 
          and fitness programs designed to empower the community. Together, we can build a healthier NIT Delhi!
        </p>
      </div>
    </div>
  );
};

export default About;
