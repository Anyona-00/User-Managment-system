import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define other routes */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
