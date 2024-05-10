const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Your permanent token
const PERMANENT_TOKEN = 'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjY0NzA1NTEsXCJpXCI6OTA1OTQzOSxcImNcIjo0Njc1ODYzLFwidVwiOjE5MzA5ODQ2LFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNzE1MjM0NTg3fQ.xYA7ZoO3WAICTV46EVevi0P2nTeezMWe7mh3c3T_AZM';

// Endpoint to fetch tasks under a specific folder
app.get('/folders/:folderId/tasks', async (req, res) => {
  const { folderId } = req.params;
  try {
    // Fetch tasks associated with the specified folder ID using the permanent token
    const tasksResponse = await axios.get(`https://www.wrike.com/api/v4/folders/${folderId}/tasks`, {
      headers: {
        Authorization: `Bearer ${PERMANENT_TOKEN}`
      }
    });

    const tasks = tasksResponse.data.data;
    res.json({ tasks }); // Return tasks data
  } catch (error) {
    console.error(`Error fetching tasks for folder ${folderId}:`, error.response.data);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Add a new endpoint to fetch all projects
app.get('/projects', async (req, res) => {
  try {
    // Fetch projects using the permanent token
    const projectsResponse = await axios.get('https://www.wrike.com/api/v4/folders', {
      headers: {
        Authorization: `Bearer ${PERMANENT_TOKEN}`
      }
    });

    const projects = projectsResponse.data.data;
    res.json({ projects }); // Return projects data
  } catch (error) {
    console.error('Error fetching projects:', error.response.data);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add a new endpoint to fetch all tasks
app.get('/tasks', async (req, res) => {
  try {
    // Fetch all tasks using the permanent token
    const tasksResponse = await axios.get('https://www.wrike.com/api/v4/tasks', {
      headers: {
        Authorization: `Bearer ${PERMANENT_TOKEN}`
      }
    });

    const tasks = tasksResponse.data.data;
    res.json({ tasks }); // Return tasks data
  } catch (error) {
    console.error('Error fetching tasks:', error.response.data);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
