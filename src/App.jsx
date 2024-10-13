import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define other routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Router>
  );
}

export default App;
