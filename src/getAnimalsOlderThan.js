const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: acAge }) => acAge >= age);
};

module.exports = getAnimalsOlderThan;
