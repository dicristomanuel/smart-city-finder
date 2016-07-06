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

Copyright (c) 2016 Manuel Di Cristo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
