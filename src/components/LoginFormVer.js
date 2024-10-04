// // /src/components/LoginForm.js
// import React, { useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { sendOtp, verifyOtp, loginUser } from '../redux/userSlice';
// import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';
// import { auth } from '../firebase';
// import './LoginForm.css';

// const countryCodes = {
//   IN: { code: '+91', name: 'India' },
//   US: { code: '+1', name: 'USA' },
//   GB: { code: '+44', name: 'UK' },
//   AU: { code: '+61', name: 'Australia' },
//   JP: { code: '+81', name: 'Japan' },
//   DE: { code: '+49', name: 'Germany' },
// };

// const LoginForm = () => {
//   const [countryCode, setCountryCode] = useState('IN');
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [verificationId, setVerificationId] = useState(null);
//   const recaptchaRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const { otpSent, otpVerified } = useSelector((state) => state.user);

//   const setUpRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(auth, recaptchaRef.current, {
//         'size': 'invisible',
//         'callback': (response) => {
//           console.log('Recaptcha verified');
//         },
//       });
//     }
//   };

//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);
//     setUpRecaptcha();
//     let phoneNumber = `${countryCodes[countryCode].code}${phone}`;
//     let appVerifier = window.recaptchaVerifier;

//     try {
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
//       setVerificationId(confirmationResult.verificationId);
//       dispatch(sendOtp());
//       setIsLoading(false);
//       alert("OTP sent successfully! Please check your phone.");
//     } catch (error) {
//       console.error("SMS not sent", error);
//       setError("Failed to send OTP. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();

//     if (verificationId) {
//       let credential = PhoneAuthProvider.credential(verificationId, otp);

//       try {
//         await auth.signInWithCredential(credential);
//         dispatch(verifyOtp());
//         dispatch(loginUser());
//         alert("OTP Verified, you are logged in!");
//       } catch (error) {
//         console.error("Invalid OTP", error);
//         setError("Invalid OTP. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <div className="login-form-box">
//         <h1>{otpVerified ? "Welcome Back!" : "Hello, Welcome!"}</h1>

//         {error && <p className="error-message">{error}</p>}

//         {!otpSent && (
//           <form onSubmit={handlePhoneSubmit} className="login-form">
//             <label className="form-label">
//               Please enter your details for Sign In:
//               <div className="country-code-selector">
//                 <select
//                   value={countryCode}
//                   onChange={(e) => setCountryCode(e.target.value)}
//                   className="country-code-dropdown"
//                 >
//                   {Object.keys(countryCodes).map((code) => (
//                     <option key={code} value={code}>
//                       {code} ({countryCodes[code].code})
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Enter your mobile number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                   className="form-input"
//                 />
//               </div>
//             </label>
//             <div ref={recaptchaRef}></div>
//             <button type="submit" className="submit-btn" disabled={isLoading}>
//               {isLoading ? 'Sending...' : 'Send OTP'}
//             </button>
//           </form>
//         )}

//         {otpSent && !otpVerified && (
//           <form onSubmit={handleOtpSubmit} className="otp-form">
//             <label className="form-label">
//               Enter OTP:
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//                 className="form-input"
//               />
//             </label>
//             <button type="submit" className="submit-btn">Verify OTP</button>
//           </form>
//         )}

//         {otpVerified && <p>OTP Verified. You are logged in!</p>}
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
