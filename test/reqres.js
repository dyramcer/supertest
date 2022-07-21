const request = require("supertest");
const assert = require('chai').assert;

describe('ReqRes API', function () {
  describe('GET Single User', function () {

    it('should have 200 response', function (done) {
      let response
      request('https://reqres.in')
        .get('/api/users/2')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          done();
        });
    });

    it('should have return single user', function (done) {
      let response
      request('https://reqres.in')
        .get('/api/users/2')
        .expect(function(res){
          assert.isNotEmpty(res.body)
          assert.equal(res.body.data.id, 2)
          assert.equal(res.body.data.email, 'janet.weaver@reqres.in')
          assert.equal(res.body.data.first_name, 'Janet')
          assert.equal(res.body.data.last_name, 'Weaver')
        })
        .end(function (err, res) {
          if (err) throw err;
          done();
        });
    });

  });

  describe('GET User - Not Found', function () {

    it('should have 404 status code', function (done) {
      let response
      request('https://reqres.in')
        .get('/api/users/23')
        .expect(404)
        .end(function (err, res) {
          if (err) throw err;
          done();
        });
    });

  });
});