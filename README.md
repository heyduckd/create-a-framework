duck-module

## Installation

  npm install duck-module --save

## Utilization

```javascript
//You will have to build your own server.js

var http = require('http');
var Router = require('duck-module');
//You can name your router constructor anything you want
var duckRouter = new Router();

//The router can handle the following http request methods (GET, POST, PUT, PATCH, DELETE)
//(where /penguins is your url route)
duckRouter.get('/penguins', function(req, res) {
  res.write('got GET request to /penguins');
  res.end();
})

duckRouter.post('/penguins', function(req, res) {
  res.write('got POST request to /penguins');
  res.end();
})

duckRouter.put('/penguins', function(req, res) {
  res.write('got PUT request to /penguins');
  res.end();
})

duckRouter.patch('/penguins', function(req, res) {
  res.write('got PATCH request to /penguins');
  res.end();
})

duckRouter.delete('/penguins', function(req, res) {
  res.write('got DELETE request to /penguins');
  res.end();
})


http.createServer(duckRouter.route()).listen(3000, () => {
  console.log('Listening on port 3000');
})
```
