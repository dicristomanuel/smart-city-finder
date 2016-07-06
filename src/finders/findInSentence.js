'use strict';

import locations from '../../locations.json';

export default (sentence, limit) => {
  let result = [];
  for (let location of locations) {
    if (!!location.city && !!location.zipcode && !!location.state_abbr && !!location.state) {
      let regex = new RegExp(`\\b(${location.city}|${location.zipcode}|${location.state})\\b`, 'ig');
      if (sentence.match(regex)) {
        result.push(location);
        if (result.length === limit) {
          return result;
        }
      }
    }
  }
  return result;
};
