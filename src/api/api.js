'use strict';

const router = require('../lib/router.js');

/**
 * GET Route (/api/v1/cats)
 * Accepts an id and returns it, if valid
 */

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/cats', (req, res) => {

  const id = req.query.id;

  if (id === 'notfound') {
    res.statusCode = 404;
    res.statusMessage = 'not found';
    res.write('not found');
    res.end();
  } else if (id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${id} was requested`);
    res.end();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write('bad request');
    res.end();
  }
});

/**
 * POST Route (/api/v1/cats)
 * Accepts a JSON object and simply regurgitates it back to the browser
 */
router.post('/api/v1/cats', (req, res) => {

  if (req.body) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body));
    res.end();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write('bad request');
    res.end();
  }
});

/**
 * PUT Route (/api/v1/cats)
 * Accepts an id as a query string parameter to identify a specific resource. Data passed as stringified JSON.
 */

router.put('/api/v1/cats', (req, res) => {

  if (req.body) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(JSON.stringify(req.body));
    res.end();
  } else {
    res.statusCode = 404;
    res.statusMessage = 'OK';
    res.write(`Not found`);
    res.end();
  }
});

/**
 * DELETE Route (/api/v1/cats)
 * receives an ID as a query string parameter to identify a specific resource. Returns 200 response, and a message with deleted ID
 */

router.delete('/api/v1/cats', (req, res) => {

  const id = req.query.id;

  if (id) {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.write(`ID: ${id} was deleted`);
    res.end();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write('bad request');
    res.end();
  }
});

module.exports = {};