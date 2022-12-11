const data = require('../data/zoo_data');

const { species } = data;

const sortedOrNo = (thingToSort, sort) =>
  (sort === true ? thingToSort.sort() : thingToSort);

const getLocations = () =>
  species.reduce((locations, { location }) =>
    (!locations.includes(location) ? [...locations, location] : locations), []);

const filterByLocation = (loc) => species.filter(({ location }) => location === loc);

const filterBySex = (residents, sexToFilter) =>
  residents.filter(({ sex }) => sexToFilter === sex);

const getNames = (speciesObj, sorted) => sortedOrNo(speciesObj.map(({ name }) => name), sorted);

const filterAllBySex = (animals, sex, sorted) =>
  animals.reduce((acc, { name, residents }) =>
    [...acc, { [name]: getNames(filterBySex(residents, sex), sorted) }], []);

const nullMapMaker = (locations) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getNames(filterByLocation(currLoc)) }), {});

const getResidentsNames = (speciesOfLoc, sorted) =>
  speciesOfLoc.reduce((acc, { name, residents }) =>
    [...acc, { [name]: getNames(residents, sorted) }], []);

const mapMakerWNames = (locations, sorted) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getResidentsNames(filterByLocation(currLoc), sorted) }), {});

const mapMakerWAnimalSex = (locations, sex, sorted) =>
  locations.reduce((finalMap, currLoc) => {
    const animals = filterByLocation(currLoc);
    return { ...finalMap, [currLoc]: filterAllBySex(animals, sex, sorted) };
  }, {});

const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj);

const checkPath = ({ includeNames, sex, sorted }) => {
  if (includeNames && sex) return mapMakerWAnimalSex(getLocations(), sex, sorted);
  if (includeNames) return mapMakerWNames(getLocations(), sorted);
  return nullMapMaker(getLocations());
};

const getAnimalMap = (options) => {
  if (!isObject(options)) return nullMapMaker(getLocations());
  return checkPath(options);
};

module.exports = getAnimalMap;
