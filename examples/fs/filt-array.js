'use strict';
const { even } = require('./filters');
const evenNumbers = [1, 2, 3, 4, 5, 6].filter(even);
console.log(evenNumbers); // [ 2, 4, 6 ]
