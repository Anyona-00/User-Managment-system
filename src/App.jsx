import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import OtpVerificationPage from './pages/OtpVerificationPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define other routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp-verification" element={<OtpVerificationPage />} />

      </Routes>
    </Router>
  );
}

export default App;
