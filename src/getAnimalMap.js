const data = require('../data/zoo_data');

const { species } = data;

const getLocations = () =>
  species.reduce((locations, { location }) =>
    (!locations.includes(location) ? [...locations, location] : locations), []);

const filterByLocation = (loc) => species.filter(({ location }) => location === loc);

const getSpeciesNames = (speciesObj) => speciesObj.map(({ name }) => name);

const nullMapMaker = (locations) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getSpeciesNames(filterByLocation(currLoc)) }), []);

const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj);

const getAnimalMap = (options) => {
  if (!isObject(options)) return nullMapMaker(getLocations());
};

console.log(getAnimalMap({}));
module.exports = getAnimalMap;
