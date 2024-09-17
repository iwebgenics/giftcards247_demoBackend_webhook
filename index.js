const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// Define a POST route
app.post('/submit', (req, res) => {
  // Accessing the parsed JSON data from the request body
  const requestData = req.body;

  // Send a response with the received data
  res.status(200).json({
    message: 'Data received successfully',
    data: requestData,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
