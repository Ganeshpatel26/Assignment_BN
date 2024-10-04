// /src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import OtpPage from './components/OtpPage'; // Import OtpPage
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/otp" element={<OtpPage />} /> {/* Add the route for OtpPage */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Add the route for ProfilePage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
