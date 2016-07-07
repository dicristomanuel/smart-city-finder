var assert = require("assert");
var cities = require("../lib/index");

describe('gps_lookup()', function() {
  it('should give me 07946 based on exact location', function() {
    var hometown = cities.gps_lookup(40.672823, -74.52011);
    assert.equal(07946, hometown.zipcode);
  });
});

describe('zip_lookup()', function() {
  it('should give me 07946 based on zip code', function() {
    var hometown = cities.zip_lookup(07946);
    assert.equal(07946, hometown.zipcode);
  });
});

describe('findByState', function() {
  it('should give me a list of zipcodes', function() {
    var citiesFromZips = cities.findByState('NJ');
    assert.equal(Array.isArray(citiesFromZips), true);
    assert.equal(citiesFromZips.length > 0, true);
  })
})

describe('findByCityAndState', function() {
  it('should find me a city', function() {
    var place = cities.findByCityAndState('millington', 'nj');
    assert.equal(place.city, 'Millington')
    assert.equal(place.state, 'New Jersey')
  })
})

describe('findInSentence', function() {
  it('should return two results containing city name', function() {
    return cities.findInSentence('Traveling to Los Angeles', 2)
    .then((locations) => {
      assert.equal(locations[0].city, 'Los Angeles')
      assert.equal(locations[1].city, 'Los Angeles')
      assert.equal(locations.length, 2)
    })
  })

  it('should find me a city from a zip code', function() {
    return cities.findInSentence('Find grocery store 60601')
    .then((location) => {
      assert.equal(location[0].city, 'Chicago')
      assert.equal(location[0].state, 'Illinois')
    })
  })

  it('should find me a city from a state name', function() {
    return cities.findInSentence('We got lost in Montana')
    .then((location) => {
      assert.equal(location[0].state, 'Montana')
    })
  })
})
