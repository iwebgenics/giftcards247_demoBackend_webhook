const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000;

const mongoURL = 'mongodb+srv://new-project:v2nGYhJSkb4M0YRv@new-project.jkkdcfq.mongodb.net/test';

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error: ', err));

// Define Schema
const webhookDataSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    }
});

// Create Model
const WebhookData = mongoose.model('webhook_data', webhookDataSchema);


// Middleware to parse JSON data from requests
app.use(express.json());

// Define a POST route
app.post('/submit', async (req, res) => {
  // Accessing the parsed JSON data from the request body
  const requestData = req.body;

  try {
    const response = await new WebhookData({
      type:requestData.type,
      data: requestData.data
    })
  } catch (error) {
    console.log(error.message)
  }  // Send a response with the received data
  res.send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
