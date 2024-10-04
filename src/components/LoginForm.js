import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../redux/userSlice'; // Only import sendOtp
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const countryCodes = {
  IN: { code: '+91', name: 'India' },
  US: { code: '+1', name: 'USA' },
  GB: { code: '+44', name: 'UK' },
  AU: { code: '+61', name: 'Australia' },
  JP: { code: '+81', name: 'Japan' },
  DE: { code: '+49', name: 'Germany' },
};

const LoginForm = () => {
  const [countryCode, setCountryCode] = useState('IN');
  const [phone, setPhone] = useState(''); // Allow user to enter their mobile number
  const [error, setError] = useState(''); // State for error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    // Validate phone number: must be exactly 10 digits
    const phoneRegex = /^\d{10}$/; // Regular expression to check for exactly 10 digits

    // Check if the input is empty
    if (phone.trim() === '') {
      setError('Please enter your mobile number.');
      return;
    }

    // Check if the phone number is valid
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid phone number (10 digits only).');
      return;
    }

    // If validation passes, clear error message
    setError('');
    
    // Dispatch sendOtp if needed
    dispatch(sendOtp());

    // Navigate to OTP page directly without sending an OTP
    navigate('/otp');
  };

  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <h1 className="text-center">Hello, Welcome!</h1>

        <form onSubmit={handlePhoneSubmit} className="login-form">
          <label className="form-label">
            Please enter your details for Sign In:
            <div className="country-code-selector">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="country-code-dropdown"
              >
                {Object.keys(countryCodes).map((code) => (
                  <option key={code} value={code}>
                    {code} ({countryCodes[code].code})
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={phone} // Allow user to enter their mobile number
                onChange={(e) => setPhone(e.target.value)} // Update state based on user input
                className="form-input"
              />
            </div>
          </label>
          {error && <div className="error-message text-danger">{error}</div>} {/* Display error message */}
          <button type="submit" className="submit-btn w-100">
            Send OTP
          </button>
        </form>

        {/* Divider with OR */}
        <div className="d-flex flex-column align-items-center mt-4">
          <div className="d-flex align-items-center my-3 w-100">
            <hr className="flex-grow-1" />
            <span className="px-2">OR</span>
            <hr className="flex-grow-1" />
          </div>

          <div className="w-100 d-flex justify-content-center">
            <button className="btn btn-outline-info d-flex align-items-center">
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google logo"
                className="me-2"
              />
              Connect with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
