import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';

const fetchData = async () => {
  try {
    // Fetch tasks from server
    const tasksResponse = await axios.get(`${SERVER_URL}/tasks`);
    const tasksData = tasksResponse.data;

    // Fetch projects from server
    const projectsResponse = await axios.get(`${SERVER_URL}/projects`);
    const projectsData = projectsResponse.data;

    return { tasks: tasksData, projects: projectsData };
  } catch (error) {
    console.error('Error fetching data from server:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

const fetchTasksForProject = async (projectId) => {
  try {
    // Fetch tasks associated with the selected project
    const tasksResponse = await axios.get(`${SERVER_URL}/projects/${projectId}/tasks`);
    const tasksData = tasksResponse.data.tasks; // Access tasks data from the response
    return tasksData;
  } catch (error) {
    console.error('Error fetching tasks for project:', error);
    throw error;
  }
};
const SecondDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedProjectTasks, setSelectedProjectTasks] = useState([]);

  useEffect(() => {
    const fetchTasksAndProjects = async () => {
      try {
        // Fetch tasks and projects from server
        const { tasks: tasksData, projects: projectsData } = await fetchData();

        // Update tasks state with fetched task data
        setTasks(tasksData.tasks);

        // Update projects state with fetched project data
        setProjects(projectsData.projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasksAndProjects();
  }, []);

  const handleProjectClick = async (projectId) => {
    try {
      // Fetch and set tasks associated with the selected project
      const projectTasks = await fetchTasksForProject(projectId);
      setSelectedProjectTasks(projectTasks);
    } catch (error) {
      console.error('Error handling project click:', error);
    }
  };

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
          <li key={`project-${project.id}`} onClick={() => handleProjectClick(project.id)}>
            Project Name: {project.title}
          </li>
        ))}
      </ul>

      <h1>Tasks for Selected Project</h1>
      <ul>
        {selectedProjectTasks.map(task => (
          <li key={`selected-task-${task.id}`}>
            Task Name: {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondDashboard;
