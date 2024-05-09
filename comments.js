//Create web server
var express = require('express');
var app = express();

//Create a GET route
app.get('/comments', function(req, res) {
  res.send('GET request to the homepage');
});

//Create a POST route
app.post('/comments', function(req, res) {
  res.send('POST request to the homepage');
});

//Create a PUT route
app.put('/comments', function(req, res) {
  res.send('PUT request to the homepage');
});

//Create a DELETE route
app.delete('/comments', function(req, res) {
  res.send('DELETE request to the homepage');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});

//In the terminal, run "node comments.js" to start the server. 
//In the browser, go to localhost:3000/comments to see the response. 
//You can also use Postman to test the POST, PUT, and DELETE routes. 
//You can also use curl to test the GET route. 
//In the terminal, run "curl localhost:3000/comments" to see the response. 
//You can also use the browser to test the GET route. 
//In the browser, go to localhost:3000/comments to see the response. 
//You can also use the browser to test the POST route. 
//In the browser, go to localhost:3000/comments to see the response. 
//You can also use the browser to test the PUT route. 
//In the browser, go to localhost:3000/comments to see the response. 
//You can also use the browser to test the DELETE route. 
//In the browser, go to localhost:3000/comments to see the response. 
//You can also use Postman to test the GET route. 
//You can also use Postman to test the