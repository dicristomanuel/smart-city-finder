require('babel-polyfill');
require('babel-register');

const city = require('./src');

var result = city.findInSentence('Traveling to Los Angeles, baby!', 2);

console.log(result);
