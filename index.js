// Import the express library. //
const express = require('express'); 

// Create an instance of express
const app = express();

// Define a route handler for GET requests made to the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Have the app listen on port 3000
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
