// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from Wrike API
    axios.get('https://www.wrike.com/api/v4/projects', {
      headers: {
        'Authorization': 'Bearer YOUR_WRIKE_API_KEY'
      }
    })
    .then(response => {
      setProjects(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
    });
  }, []);

  return (
    <div>
      <h1>Project Dashboard</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
