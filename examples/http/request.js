'use strict';
const request = require('request');

const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    let curr = JSON.parse(body);
    curr
      .filter(item => item.CharCode === 'USD' || item.CharCode === 'EUR')
      .forEach(item => console.log(item.Value));
  }
};

let res = request('https://netology-fbb-store-api.herokuapp.com/currency', callback);

console.log(res instanceof Promise);
