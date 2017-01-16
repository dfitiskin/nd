'use strict';
const https = require('https');
const url = 'https://netology-fbb-store-api.herokuapp.com/currency';
function process(data) {
  let curr = JSON.parse(data);
  curr
    .filter(item => item.CharCode === 'USD' || item.CharCode === 'EUR')
    .forEach(item => console.log(item.Name, item.Value));
}
function handler(response) {
  if (response.statusCode !== 200) {
    console.log([
      'Получен ответ',
      response.statusCode,
      response.statusMessage
    ].join(' '));
    return;
  }
  let type = response.headers['content-type'].split(';').shift();
  if (type !== 'application/json') {
    console.log(['Получен формат', type].join(' '));
    return;
  }
  let data = '';
  response.on('data', chunk => data += chunk);
  response.on('end', () => process(data));
}
const request = https.request(url);
request.on('response', handler);
request.end();
