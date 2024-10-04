import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OtpPage.css'; // Ensure you have a custom CSS file for additional styles

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array for each digit of OTP
  const [timer, setTimer] = useState(30); // Timer state
  const [canResend, setCanResend] = useState(false); // State for resending OTP
  const navigate = useNavigate();

  // Hardcoded OTP for demonstration
  const hardcodedOtp = '123456'; // Change this to your desired hardcoded OTP

  // Effect for countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setCanResend(true); // Allow resending OTP
          return 0; // Stop timer at 0
        }
        return prev - 1;
      });
    }, 1000); // Decrease timer every second

    return () => clearInterval(countdown); // Clear interval on component unmount
  }, []);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1); // Only allow one digit per input
      setOtp(newOtp);

      // Move to the next input automatically
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Join the array to create the OTP string
    const otpString = otp.join('');
    
    // Compare entered OTP with hardcoded OTP
    if (otpString === hardcodedOtp) {
      console.log("OTP Verified:", otpString);
      alert("OTP Verified! You are now logged in.");
      // Navigate to the profile page after successful login
      navigate('/profile'); // Update the route to match your setup
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    setOtp(['', '', '', '', '', '']); // Clear the OTP input
    alert("OTP sent successfully!"); // Show success message for OTP sent

    // Reset timer to 30 seconds
    setTimer(30);
    setCanResend(false); // Disable resend button until timer reaches 0

    // Restart the countdown
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setCanResend(true); // Allow resending OTP
          return 0; // Stop timer at 0
        }
        return prev - 1;
      });
    }, 1000); // Decrease timer every second

    return () => clearInterval(countdown); // Clear interval on component unmount
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="otp-card p-4 shadow-lg rounded">
        <h1 className="text-center mb-4">Enter OTP</h1>
        <p className="text-center">
          We have sent an OTP to your Phone Number <br />
          <strong>+91 8355821911</strong>
        </p>
        
        <form onSubmit={handleOtpSubmit} className="text-center">
          <div className="otp-inputs mb-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                className="otp-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onFocus={(e) => e.target.select()} // Select the input value on focus
              />
            ))}
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <div className="text-center mt-3">
          <span className="otp-timer">{timer > 0 ? `${timer} sec` : 'Time is up!'}</span>
        </div>
        {canResend && (
          <div className="text-center mt-3">
            <button onClick={handleResendOtp} className="btn btn-secondary">
              Resend OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpPage;
