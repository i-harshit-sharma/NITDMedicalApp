import React, { useState } from 'react';
import './Doctor.css';
import SampleDemo from './Otp';

export const Admin = () => {
  const [otp, setOtp] = useState(true); // Use boolean for better readability

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setOtp(false); // Set otp to false to show the next UI
  };

  return (
    <div>
      {otp ? ( 
        <form onSubmit={handleSubmit}> {/* Use onSubmit for the form */}
          <div className="email">
            <label htmlFor="fmail">Enter the Email:</label>
            <input type="email" id="fmail" required />
          </div>
          <div className="password">
            <label htmlFor="fpass">Enter the Password:</label>
            <input type="password" id="fpass" required />
          </div>
          <div className="remember">
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
          <div className="forget">
            <a href="">Forgot Password?</a>
          </div>
        </form>
      ) : (
        <SampleDemo/>
      )}
    </div>
  );
};
