# Smart City Finder

This package is an extension of the already existing cities with additional automated options to research cities through regex;

### Install

```
npm install smart-city-finder --save
```

### Usage

```
var cities = require('smart-city-finder');
```

#### Lookup by GPS coordinates

```
cities.gps_lookup(lat, lng);
```

#### Lookup by zipcode

```
cities.zip_lookup(zipcode);
```

#### Lookup by state

```
cities.findByState('NJ')
```

#### Find in sentence
This function will analyze a given sentence, extract a city, state or zip code and return an array of results.

```
cities.findInSentence('Traveling to Los Angeles')
cities.findInSentence('Find grocery store 60601')
cities.findInSentence('We got lost in Montana')
```

Sometimes your sentence could match with many results. Just add a limit argument to the function call.

```
cities.findInSentence('Traveling to Los Angeles', 2)
```

### Sample Response

A sample response or object that this module returns looks like this.

    {
        zipcode: "07946",
        state_abbr: "NJ",
        latitude: "40.672823",
        longitude: "-74.52011",
        city: "Millington",
        state: "New Jersey"
    }

When using the ```findInSentence``` function this module will return an array of objects instead.

## License

MIT.
