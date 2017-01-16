const num1 = require('./number');
delete require.cache[require.resolve('./number')];
const num2 = require('./number');

console.log(num1, num2); // <mark class="important">77, 77, 77</mark>
