const data = require('../data/zoo_data');

const { species } = data;

const sortedOrNo = (thingToSort, sort) =>
  (sort === true ? thingToSort.sort() : thingToSort);

const getLocations = () =>
  species.reduce((locations, { location }) =>
    (!locations.includes(location) ? [...locations, location] : locations), []);

const filterByLocation = (loc) => species.filter(({ location }) => location === loc);

const getNames = (speciesObj, sorted) => sortedOrNo(speciesObj.map(({ name }) => name), sorted);

const nullMapMaker = (locations) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getNames(filterByLocation(currLoc)) }), {});

const getResidentsNames = (speciesOfLoc, sorted) =>
  speciesOfLoc.reduce((acc, { name, residents }) =>
    [...acc, { [name]: getNames(residents, sorted) }], []);

const mapMakerWNames = (locations, sorted) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getResidentsNames(filterByLocation(currLoc), sorted) }), {});

const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj);

const checkPath = ({ includesName, sex, sorted }) => {
  if (includesName) return mapMakerWNames(getLocations(), sorted);
  return nullMapMaker(getLocations());
};

const getAnimalMap = (options) => {
  if (!isObject(options)) return nullMapMaker(getLocations());
  // const { includesName, sorted, sex } = options;
  return checkPath(options);
};

// console.log(getAnimalMap({ includesName: true, sorted: true }).NE);
module.exports = getAnimalMap;
