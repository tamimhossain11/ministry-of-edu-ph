// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './LndingPage.css'; // Import your CSS file for styling
import SecondDashboard from '../Components/SecondDashboard';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Ministry of Education Facilities Management</h1>
        <p>Providing real-time updates and comprehensive data for school construction and refurbishment projects.</p>
      </header>
      <section>
        <h2>Public Website</h2>
        <p>Main page of the Ministry of Education’s Facilities Management which will contain public and general information and general statistics of the school.</p>
        <ul>
          <li>Statistics of the different types of schools</li>
          <li>Pie chart of the number of projects being worked on (based on total)</li>
        </ul>
        <Link to="/team-portals" className="btn">Explore Team Portals</Link>
      </section>
      <footer>
        <p>&copy; Ministry of Education Facilities Management</p>
      </footer>
      <SecondDashboard/>
    </div>
  );
}

export default LandingPage;
