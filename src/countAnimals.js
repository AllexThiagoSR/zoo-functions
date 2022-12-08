const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((animals, { name, residents }) => ({
      ...animals,
      [name]: residents.length,
    }), {});
  }

  const { species: specie, sex: sexReq } = animal;
  const residentsFound = species.find(({ name }) => name === specie).residents;

  if (!sexReq) return residentsFound.length;
  return residentsFound.filter(({ sex }) => sex === sexReq).length;
};

module.exports = countAnimals;
