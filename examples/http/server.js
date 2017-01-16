'use strict';
const http = require('http');
const querystring = require('querystring');

const port = 3333;

function parse(data, type) {
  switch (type) {
    case 'application/json':
      data = JSON.parse(data);
      break;
    case 'application/x-www-form-urlencoded':
      data = querystring.parse(data);
      break;
  }
  return data;
}

function handler(req, res) {
  let data = '';
  req.on('data', chunk => data += chunk);
  req.on('end', () => {
    data = parse(data, req.headers['content-type']);
    res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
    res.write(`Hello ${data.name || 'World'}!`);
    res.end();
  });
}

const server = http.createServer();
server
  .listen(port)
  .on('error', err => console.error(err))
  .on('request', handler)
  .on('listening', () => {
    console.log('Start HTTP on port %d', port);
  });
