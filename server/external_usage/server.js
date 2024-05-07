

// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Your permanent token
const PERMANENT_TOKEN = 'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjY0NzA1NTEsXCJpXCI6OTA1NzYzOSxcImNcIjo0Njc1ODYzLFwidVwiOjE5MzA5ODQ2LFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNzE1MTA0NTM5fQ.UndoDso-S1ebkFRIeZrNgxLziLr78PdXl5HVr_ZFQ2w';

app.get('/projects', async (req, res) => {
  try {
    // Fetch projects using the permanent token
    const projectsResponse = await axios.get('https://www.wrike.com/api/v4/folders', {
      headers: {
        Authorization: `Bearer ${PERMANENT_TOKEN}`
      }
    });

    res.json(projectsResponse.data.data);
  } catch (error) {
    console.error('Error fetching projects:', error.response.data);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});