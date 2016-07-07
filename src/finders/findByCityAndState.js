

import _ from 'lodash';
import locations from '../../locations.json';

var filter = exports.filter = _.partial(_.filter, locations);

export default (city, state) => {
  const cities = filter({
    state_abbr: state.toUpperCase()
  })
  return _.find(cities, function(c) {
    return c.city.toUpperCase() === city.toUpperCase()
  })
};
