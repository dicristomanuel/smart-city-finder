

import _ from 'lodash';
import locations from '../../locations.json';

var filter = exports.filter = _.partial(_.filter, locations);

export default (state) => {
  state = state.toUpperCase()
  return filter({state_abbr: state})
};
