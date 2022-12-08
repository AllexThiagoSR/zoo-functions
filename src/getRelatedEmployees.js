const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.reduce((managers, currEmplo) => (
  [...managers, ...currEmplo.managers]
), []).includes(id);

// const isManager = (id) => {
//   return employees.reduce((managers, currEmplo) => {
//     return managers.concat(...currEmplo.managers);
//   }, []).includes(id);
// };

const getRelatedEmployees = (managerId) => {
  // seu código aqui
};

module.exports = { isManager, getRelatedEmployees };
