'use strict';

const superagent = require('superagent');

describe('api', () => {

  it('GET should respond with \'not found\' for valid requests made with an id that was not found', () => {
    return superagent.get('http://localhost:3000/api/v1/cats?id=notfound')
      .catch(err => {
        expect(err.status).toBe(404);
        expect(err.response.text).toBe('not found');
      });
  });

  it('GET should respond with \'bad request\' if no id was provided in the request', () => {
    return superagent.get('http://localhost:3000/api/v1/cats')
      .catch(err => {
        expect(err.status).toBe(400);
        expect(err.response.text).toBe('bad request');
      });
  });

  it('GET should contain a response body for a request made with a valid id', () => {
    return superagent
      .get('http://localhost:3000/api/v1/cats?id=123')
      .then(data => {
        expect(data.status).toBe(200);
        expect(data.text).toBe('ID: 123 was requested');
      });
  });

  it('POST should respond with \'bad request\' if no request body was provided or the body was invalid', () => {
    return superagent.post('http://localhost:3000/api/v1/cats')
      .catch(err => {
        expect(err.status).toBe(400);
        expect(err.data.text).toBe('bad request');
      });
  });

  it('POST should respond with response with the POST\'d JSON as the content', () =>{
    let newObj = {
      id:12345,
      name:'Kitty Doe'};
    return superagent.post('http://localhost:3000/api/v1/cats')
      .send(newObj)
      .then(data => {
        expect(data.status).toBe(200);
        expect(data.text).toBe(`{\"id\":12345,\"name\":\"Kitty Doe\"}`);
      });
  });
});