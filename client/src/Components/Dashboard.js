import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000'; // Update with your server's URL

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchTasksAndProjects = async () => {
      try {
        // Fetch tasks and projects from server
        const tasksResponse = await axios.get(`${SERVER_URL}/tasks`);
        const projectsResponse = await axios.get(`${SERVER_URL}/projects`);

        // Update tasks state with fetched task data
        setTasks(tasksResponse.data.tasks);

        // Update projects state with fetched project data
        setProjects(projectsResponse.data.projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasksAndProjects();
  }, []);

  // Function to handle clicking on a project
  const handleProjectClick = async (projectId) => {
    try {
      // Fetch tasks under the selected project
      const tasksResponse = await axios.get(`${SERVER_URL}/folders/${projectId}/tasks`);
      setTasks(tasksResponse.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks for project:', error);
    }
  };

  return (
    <div>
       <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={`project-${project.id}`} onClick={() => handleProjectClick(project.id)}>
            Project ID: {project.id} - Project Name: {project.title}
          </li>
        ))}
      </ul>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={`task-${task.id}`}>
            Task ID: {task.id} - Task Name: {task.title}
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Dashboard;
