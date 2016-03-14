// 'use strict';

var http = require('http');
var fs = require('fs');
var Router = require(__dirname + '/lib/router.js');

var Framework = new Router();

Framework.get('/framework/:id', (req, res) => {
  // res.writeHead(200, {'content-type': 'text/html'});
  res.textHeader('text');
  res.write('Hello Human');
  res.end();
});

Framework.post('/framework', (req, res) => {
  var timestamp = new Date();
  var time = timestamp.getTime();
  var array = [];

  req.on('data', (data) => {
    console.log('Bufferize: ' + data);
    array.push(data);
  });
  req.on('end', function(){
    fs.writeFile(__dirname + '/log/' + time + '.txt', array, (err) => {
      console.log('Error: ' + err);
      console.log('Array: ' + array);
      console.log('Time: ' + time);
      // res.writeHead(200, {'content-type': 'text/html'});
    });
    res.textHeader('text');
    res.write('Hello');
    res.end();
  });
});

Framework.delete('/framework/:id', (req, res) => {
  fs.readdir(__dirname + '/log', (err, files) => {
    try {
      // res.writeHead(200, {'content-type': 'text/html'});
      res.textHeader('text');
      files.forEach((file) => {
        fs.unlink(__dirname + '/log/' + file);
      });
      res.end();
    } catch(err) {
      console.log('Deleting err: ' + err);
    }
  });
});

module.exports = http.createServer(Framework.route()).listen(3000, function(){
  console.log('Listening on port 3000');
});
