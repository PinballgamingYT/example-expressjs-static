const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, 'pages/assets')));

// Define route for your homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

// Other routes if needed
app.get('/locations', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'locations.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'menu.html'));
});

app.get('/ourteam', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'ourteam.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
