// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that listens to GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});