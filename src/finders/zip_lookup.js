'use strict';

import _ from 'lodash';
import locations from '../../locations.json';

const find = exports.find = _.partial(_.find, locations);

export default (zipcode) => {
  const zipcodePad = _.padLeft(zipcode, 5, 0);
  return find("zipcode", zipcodePad);
};
