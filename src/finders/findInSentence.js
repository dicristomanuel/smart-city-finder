'use strict';

import locations from '../../locations.json';
import findMatch from '../helpers/findMatch';
import firstTrueOf from '../helpers/firstTrueOf';

export default (sentence, limit) => {
  return findMatch(sentence, limit)
  .then((locations) => {
    return firstTrueOf(locations)
  })
};
