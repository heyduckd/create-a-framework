'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var request = chai.request;
var expect = chai.expect;
var server = require(__dirname + '/../framework.js');

describe('Testing to see if the server is routing req', function(){
  after(() => server.close());
  it('should write header when req traverses /framework GET route', (done) => {
    request('localhost:3000')
    .get('/framework/:id')
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type', 'text/html');
      done();
    });
  });
  it('should write header when POST request is made', (done) => {
    request('localhost:3000')
    .post('/framework')
    .send({})
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      console.log('Error is: ' + err);
      expect(res).to.have.header('content-type', 'text/html');
      done();
    });
  });
  it('should write header when req traverses /framework DELETE route', (done) => {
    console.log('delete test');
    request('localhost:3000')
    .delete('/framework/me')
    .send({})
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type', 'text/html');
      done();
    });
  });
});
