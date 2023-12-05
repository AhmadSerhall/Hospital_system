// AppRouter.js (for react-router-dom version 6)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Signup from './pages/signup';
import Patient from './pages/patient/patient';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/patient" element={<Patient/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
