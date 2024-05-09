
// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const CLIENT_ID = 'W7jcamg8';
const CLIENT_SECRET = 'bqiUgdl7VIgCqRhJwbTSWnnjk99md4UqdySbfz43yqJJkKokJSz4KUu3wTMrxPtN';
const REDIRECT_URI = 'http://localhost:5000/callback'; // Modify to match your server's callback URL

app.get('/authorize', (req, res) => {
  // Redirect user to Wrike's authorization URL
  res.redirect(`https://login.wrike.com/oauth2/authorize/v4?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange authorization code for access token
    const response = await axios.post('https://login.wrike.com/oauth2/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI
    });

    const accessToken = response.data.access_token;

    // Fetch projects using access token
    const projectsResponse = await axios.get('https://www.wrike.com/api/v4/folders', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    res.json(projectsResponse.data.data);
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'An error occurred while fetching projects' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






