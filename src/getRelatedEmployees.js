const { employees } = require('../data/zoo_data');

const message = 'O id inserido não é de uma pessoa colaboradora gerente!';

const checkManager = (allManagers, managers) => managers.some((m) => allManagers.includes(m));

const getAllManagers = () =>
  employees.reduce((allManagers, { managers }) =>
    (checkManager(allManagers, managers) ? allManagers : [...allManagers, ...managers]), []);

const isManager = (id) => getAllManagers().includes(id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) throw new Error(message);

  return employees.reduce((acc, { managers, firstName, lastName }) =>
    (managers.includes(managerId) ? [...acc, `${firstName} ${lastName}`] : acc), []);
};

module.exports = { isManager, getRelatedEmployees };
