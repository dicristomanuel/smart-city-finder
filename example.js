require('babel-polyfill');
require('babel-register');

var city = require('./src');

debugger;
city.findInSentence('Traveling to Zuni', 2)
.then((location) => {
  console.log(location[0]);
})
