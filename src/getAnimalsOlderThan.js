const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) =>
  species.find(({ name }) => name === animal).residents.every(({ age: acAge }) => acAge >= age);

module.exports = getAnimalsOlderThan;
