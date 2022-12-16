const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (info) => {
  if (!info) return null;
  const { name, id: idRec } = info;
  return employees.find(({ id, lastName, firstName }) =>
    (id === idRec || lastName === name || firstName === name));
};

const findSpecie = (specieID) => species.find(({ id }) => specieID === id);

const getLocations = (speciesID) => speciesID.map((id) => findSpecie(id).location);

const getSpecies = (speciesID) => speciesID.map((id) => findSpecie(id).name);

const creatCoverage = ({ firstName, lastName, responsibleFor, id }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpecies(responsibleFor),
  locations: getLocations(responsibleFor),
});

const coverageAllEmployees = () => employees.map(creatCoverage);

const getEmployeesCoverage = (info) => {
  const employee = getEmployee(info);
  if (employee === undefined) throw new Error('Informações inválidas');
  return (employee === null) ? coverageAllEmployees() : creatCoverage(employee);
};

module.exports = getEmployeesCoverage;
