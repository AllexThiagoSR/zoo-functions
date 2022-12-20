const { species } = require('../data/zoo_data');

const undefinedSpecie = () =>
  species.reduce((animals, { name, residents }) => ({ ...animals, [name]: residents.length }), {});

const findResidents = (specie) => species.find(({ name }) => name === specie).residents;

const filterResidentsBySex = (residents, sexReq) => residents.filter(({ sex }) => sex === sexReq);

const countAnimals = (animal) => {
  if (!animal) return undefinedSpecie();
  if (!animal.sex) return findResidents(animal.species).length;
  return filterResidentsBySex(findResidents(animal.species), animal.sex).length;
};

module.exports = countAnimals;
