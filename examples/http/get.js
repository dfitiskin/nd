'use strict';
const http = require('http');

http.get('http://netology.ru/', res => {
  console.log(`Статус ответа: ${res.statusCode}`);
  res.pipe(process.stdout);
});
