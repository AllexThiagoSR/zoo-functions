const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.reduce((allManagers, { managers }) => (
  [...allManagers, ...managers]
), []).includes(id);

// const isManager = (id) => {
//   return employees.reduce((managers, currEmplo) => {
//     return managers.concat(...currEmplo.managers);
//   }, []).includes(id);
// };

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.reduce((acc, { managers, firstName, lastName }) => (
      managers.includes(managerId) ? [...acc, `${firstName} ${lastName}`] : acc
    ), []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
