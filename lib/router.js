'use strict';

var Router = module.exports = function(){
  this.routes = {
    'GET': {},
    'POST': {},
    // 'PUT': {},
    // 'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb){
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function(route, cb){
  this.routes['POST'][route] = cb;
};

// Router.prototype.get = function(route, cb){
//   this.routes['PUT'][route] = cb
// }
//
// Router.prototype.get = function(route, cb){
//   this.routes['PATCH'][route] = cb
// }

Router.prototype.delete = function(route, cb){
  this.routes['DELETE'][route] = cb;
};

Router.prototype.route = function(){
  return (req, res) => {
    var reqUrl = req.url.split('/');
    var id = '/' + reqUrl[1] + '/:id';
    // var id2 = '/' + reqUrl[1];
    var routeFunction;
    if(req.method === 'GET' || req.method === 'DELETE' && req.url !== id){
      routeFunction = this.routes[req.method][id];
    } else if (req.method === 'POST'){
      console.log('POST works');
      routeFunction = this.routes[req.method][req.url];
    }
    res.textHeader = function(type){
      if(type.toUpperCase() === 'TEXT'){
        console.log(type);
        res.writeHead(200, {'content-type': 'text/html'});
      }
    };
    routeFunction(req, res);
  };
};
