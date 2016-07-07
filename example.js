require('babel-polyfill');
require('babel-register');

var city = require('./src');

city.findInSentence('Traveling to Los Angeles 90001', 2)
.then((location) => {
  console.log(location[0]);
})
