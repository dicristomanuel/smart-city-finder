'use strict';

import locations from '../../locations.json';
import findMatch from '../helpers/findInSentenceHelper';

export default (sentence, limit) => {
  findMatch(sentence, 1)
  .then((locations) => {
    return locations[0] || locations[1] || locations[2]
  })
};
