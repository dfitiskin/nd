'use strict';
const querystring = require('querystring');
const https = require('https');

let data = querystring.stringify({
  'items[49981]':	1
});
console.log(data);

let options = {
  hostname: 'www.kuvalda.ru',
  path: '/_terminal/api/1.0/cart/items/add',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

let request = https.request(options);
request.on('response', handler);
request.write(data);
request.end();

function handler(response) {
  console.log([
    'Получен ответ',
    response.statusCode,
    response.statusMessage
  ].join(' '));
  console.log(JSON.stringify(response.headers));

  let data = '';
  response.on('data', chunk => data += chunk);
  response.on('end', () => console.log(data));
}
