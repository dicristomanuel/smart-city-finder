import locations from '../../locations.json';

const iterateLocations = (instance, sentence, limit) => {
  let result = [];
  for (let location of locations) {
    if (!!location.city && !!location.zipcode && !!location.state_abbr && !!location.state) {
      let zipcode = new RegExp(`\\b(${location[instance]})\\b`, 'ig');
      if (sentence.match(zipcode)) {
        result.push(location);
        if (result.length === limit)
          return result;
      }
    }
  }
  return result;
}

export default async (sentence, limit) => {
  try {
    return await ([
      iterateLocations('zipcode', sentence, limit),
      iterateLocations('state', sentence, limit),
      iterateLocations('city', sentence, limit)
    ]);
  } catch(error) {
    throw new Error(error);
  }
}
