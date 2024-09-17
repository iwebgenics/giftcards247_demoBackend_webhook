const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// Define a POST route
app.post('/submit', (req, res) => {
  // Accessing the parsed JSON data from the request body
  const requestData = req.body;
console.log(req.body)
  // Send a response with the received data
  res.send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
