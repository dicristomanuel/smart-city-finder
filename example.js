'use strict';

require('babel-polyfill');
require('babel-register');

var city = require('./src');

// city.findInSentence('hello los angeles')
city.findInSentence('hello los angeles 90002')
