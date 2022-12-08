const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => employees.find(({ firstName, lastName }) => {
  const boolResult = firstName === employeeName || lastName === employeeName;
  return boolResult;
}) || {};

module.exports = getEmployeeByName;
