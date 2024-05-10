// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './LndingPage.css'; // Import your CSS file for styling
import Dashboard from '../Components/Dashboard';
import Header from '../Components/Header/Header'

const LandingPage = () => {
  return (
   
    <div className="landing-page">
       <Header/>.     
      <Dashboard/>
    </div>
  );
}

export default LandingPage;
