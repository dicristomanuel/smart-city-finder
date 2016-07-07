require('babel-polyfill');
require('babel-register');

const city = require('./src');

city.findInSentence('Traveling to Los Angeles, baby!', 2)
.then((location) => {
  console.log(location[0]);
})
