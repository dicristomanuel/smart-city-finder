import locations from '../../locations.json';

const iterateLocations = (instance, sentence, limit) => {
    let result = [];
    for (let location of locations) {
      if (!!location.city && !!location.zipcode && !!location.state_abbr && !!location.state) {
        let regex = new RegExp(`\\b(${location[instance]})\\b`, 'ig');
        if (sentence.match(regex)) {
          result.push(location);
          if (result.length === limit)
          return result;
        }
      }
    }
    return !!result.length ? result : false;
}

export default (sentence, limit) => {
  return iterateLocations('zipcode', sentence, limit)
  || iterateLocations('state', sentence, limit)
  || iterateLocations('city', sentence, limit)
}
