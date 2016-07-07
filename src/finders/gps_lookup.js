

import haversine from 'haversine';
import locations from '../../locations.json';


export default (latitude, longitude) => {
  let minDistance = Infinity;
  let minLocation = {};

  const start = {
    latitude,
    longitude
  }

  for (var i = 0; i < locations.length; i++) {
    const distance = haversine(start, locations[i]);

    if (distance < minDistance) {
      minLocation = locations[i];
      minDistance = distance;
    }
  }

  minLocation.distance = minDistance;
  return minLocation;
};
