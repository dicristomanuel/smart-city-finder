'use strict';

import locations from '../../locations.json';
import findMatch from '../helpers/findMatch';

export default (sentence, limit) => {
  return findMatch(sentence, limit);
};
