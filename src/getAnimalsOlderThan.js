const { species } = require('../data/zoo_data');

const findResidents = (specie) => species.find(({ name }) => name === specie).residents;

const getAnimalsOlderThan = (animal, age) =>
  findResidents(animal).every(({ age: acAge }) => acAge >= age);

module.exports = getAnimalsOlderThan;
