duck-module
===========
A small library that provides routing for GET, POST, and DELETE requests on an HTTP server.

## Installation

  npm install duck-module --save

## Utilization

```javascript
var http = require('http');
var fs = require('fs');
var Router = require(__dirname + '/lib/router.js');
//You can name your router constructor anything you want
var RouterName = new Router();
```
