'use strict';

const superagent = require('superagent');

const app = require('../src/app.js');

// beforeAll( () => {
//   app.start();
// });

// afterAll( () => {
//   app.stop();
// });

describe('api', () => {

  it('should respond with \'not found\' for valid requests made with an id that was not found', () => {
    return superagent.get('http://localhost:3000/api/v1/cats?id=notfound')
      .catch(err => {
        expect(err.status).toBe(404);
        expect(err.response.text).toBe('not found');
      });
  });

  it('should respond with \'bad request\' if no id was provided in the request', () => {
    return superagent.get('http://localhost:3000/api/v1/cats')
      .catch(err => {
        expect(err.status).toBe(400);
        expect(err.response.text).toBe('bad request');
      });
  });

  it('should contain a response body for a request made with a valid id', () => {
    return superagent
      .get('http://localhost:3000/api/v1/cats?id=123')
      .then(data => {
        expect(data.text).toBe('ID: 123 was requested');
      });
  });

});