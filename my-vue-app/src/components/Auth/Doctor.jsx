import React, { useState } from 'react';
import { Admin } from './Admin';

export const Doctor = () => {
  const [showOtp, setShowOtp] = useState(false);

  const handleShowOtp = () => {
    setShowOtp(true);
  };

  return (
    <div>
      {showOtp ? (
        <SampleDemo role="Doctor" /> // Pass the role to the OTP component
      ) : (
        <Admin handleShowOtp={handleShowOtp} /> // Handle showing OTP
      )}
    </div>
  );
};
