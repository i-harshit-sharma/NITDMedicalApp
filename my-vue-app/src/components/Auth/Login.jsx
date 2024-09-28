import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Login.css'
// import { Doctor } from './Doctor'
// import { Admin } from './Admin'
import {Patient}  from './Patient'
import image from '../../assets/image_contact.webp'
 const Login = () => {
  return (
    <div className="login-head">
   <div className="page">
    <Navbar/>
    <div className="login">
      <div className="login-content">
        <div className="heading">Log In</div>
        <div className="card">
        <div className="doctor-card box">Doctors</div>
        <div className="patient-card box">Patient</div>
        <div className="guest-card box">Guest</div>
        </div>
        <Patient />
        {/* <Admin /> */}
       
      </div>
    </div>
    </div>
    </div>
  )
}
export default Login