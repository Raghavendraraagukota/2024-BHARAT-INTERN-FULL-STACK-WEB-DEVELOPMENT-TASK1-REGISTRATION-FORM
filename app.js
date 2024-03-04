const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sample registration route
app.post('/register', (req, res) => {
  // Handle registration logic and MongoDB storage here
  console.log('Registration details:', req.body);

  // Send a success message
  res.send('Registration successful!');
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
