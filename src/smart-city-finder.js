'use strict';

var fs = require('fs');
var locations = require('../locations');
var haversine = require('haversine');
var _ = require('lodash');

var find = exports.find = _.partial(_.find, locations);
var filter = exports.filter = _.partial(_.filter, locations);

exports.zip_lookup = exports.zipLookup = function(zipcode) {
  zipcode = _.padLeft(zipcode, 5, 0);
  return find("zipcode", zipcode);
};

exports.gps_lookup = exports.gpsLookup = function(latitude, longitude) {
  var minDistance = Infinity; // simulate infinity
  var minLocation = {};

  var start = {
    latitude: latitude,
    longitude: longitude
  }

  for (var i = 0; i < locations.length; i++) {
    var distance = haversine(start, locations[i]);

    if (distance < minDistance) {
      minLocation = locations[i];
      minDistance = distance;
    }
  }

  minLocation.distance = minDistance;
  return minLocation;
};

exports.findByState = function(state) {
  state = state.toUpperCase()
  return filter({state_abbr: state})
}

exports.findByCityAndState = function(city, state) {
  state = state.toUpperCase()
  city = city.toUpperCase()

  var cities = filter({
    state_abbr: state
  })
  return _.find(cities, function(c) {
    return c.city.toUpperCase() === city
  })
}

exports.findInSentence = function(sentence, limit) {
  var result = [];
  for (var location of locations) {
    if (!!location.city && !!location.zipcode && !!location.state_abbr && !!location.state) {
      var regex = new RegExp(`\\b(${location.city}|${location.zipcode}|${location.state})\\b`, 'ig');
      if (sentence.match(regex)) {
        result.push(location);
        if (result.length === limit) {
          return result;
        }
      }
    }
  }
  return result;
}
