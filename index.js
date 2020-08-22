// We need Express to act as our application server
const express = require('express');

// Let's test that Express is working as expected:
console.log(express);

// Let's create a new App
const app = express();

// We want express to run on this port
const port = 3000;

// Add this before your app.listen() declaration
app.get('/', (request, response) => {
  console.log('Request: /');
  response.sendFile(__dirname + '/index.html');
});

// Listen for app
app.listen(port, () => {
  console.log(`app is running here: http://localhost:${port}`);
})