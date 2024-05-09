import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000'; // Update with your server's URL

const fetchData = async () => {
  try {
    // Fetch tasks from server
    const tasksResponse = await axios.get(`${SERVER_URL}/tasks`);
    const tasksData = tasksResponse.data;

    console.log('Tasks data type:', typeof tasksData); // Log the data type of tasksData

    // Fetch projects from server
    const projectsResponse = await axios.get(`${SERVER_URL}/projects`);
    const projectsData = projectsResponse.data;

    return { tasks: tasksData, projects: projectsData };
  } catch (error) {
    console.error('Error fetching data from server:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([]); // Ensure tasks is initialized as an empty array
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchTasksAndProjects = async () => {
      try {
        // Fetch tasks and projects from server
        const { tasks: tasksData, projects: projectsData } = await fetchData();

        console.log('Tasks data:', tasksData); // Log tasks data
        console.log('Projects data:', projectsData); // Log projects data

        // Update tasks state with fetched task data
        setTasks(tasksData.tasks); // Access .tasks property from tasksData

        // Update projects state with fetched project data
        setProjects(projectsData.projects); // Access .projects property from projectsData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasksAndProjects();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={`task-${task.id}`}>
            Task Name: {task.title}
          </li>
        ))}
      </ul>

      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={`project-${project.id}`}>
            Project Name: {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
