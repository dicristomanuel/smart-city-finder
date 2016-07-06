import _ from 'lodash';
import dotenv from 'dotenv';

dotenv.load();

var options = {
  USPS_USERNAME: ''
};

const config = _.defaults(process.env, options);

export default config;
