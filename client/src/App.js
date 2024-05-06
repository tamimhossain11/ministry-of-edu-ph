// src/App.js
import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage'; // Import your LandingPage component
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Dashboard/>
    </div>
  );
}

export default App;
