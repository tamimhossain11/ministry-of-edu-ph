import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000'; // Update with your server's URL

const fetchData = async () => {
  try {
    // Step 1: Redirect user to authorization URL
    window.location.href = `${SERVER_URL}/authorize`; // Modify to match your server's authorization endpoint
  } catch (error) {
    console.error('Authorization error:', error);
  }
};

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Step 2: Fetch projects from server
        const response = await axios.get(`${SERVER_URL}/projects`); // Modify to match your server's projects endpoint

        setProjects(response.data); // Assuming the response contains project data
      } catch (error) {
        console.error('Error fetching projects from server:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            Project ID: {project.id} - Project Name: {project.name}
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>Fetch Projects from Wrike</button>
    </div>
  );
};

export default App;
