const { species, employees } = require('../data/zoo_data');

const findEmployeeResponsabilities = (employeeId) =>
  employees.find(({ id }) => employeeId === id).responsibleFor;

const findSpecieResidents = (specieId) => species.find(({ id }) => specieId === id).residents;

const getOlder = (residents) =>
  residents.reduce((older, curr) => ((older.age < curr.age) ? curr : older));

const getOldestFromFirstSpecies = (id) => {
  const [firstId] = findEmployeeResponsabilities(id);
  const residents = findSpecieResidents(firstId);
  return Object.values(getOlder(residents));
};

module.exports = getOldestFromFirstSpecies;
