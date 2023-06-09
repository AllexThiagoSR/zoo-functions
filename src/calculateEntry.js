const data = require('../data/zoo_data');

const { prices } = data;

const creatObject = (obj) =>
  Object.keys(obj).reduce((finaObj, currKey) => ({ ...finaObj, [currKey]: 0 }), {});

const addOneByAge = (entrants, { age }) => {
  let { child, adult, senior } = entrants;
  if (age < 18) child += 1;
  else if (age >= 18 && age < 50) adult += 1;
  else senior += 1;
  return { child, adult, senior };
};

const countEntrants = (entrants) => entrants.reduce(addOneByAge, creatObject(prices));

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants) || entrants.length === 0) return 0;
  const counted = countEntrants(entrants);
  return Object.keys(counted).reduce((acc, curr) => acc + prices[curr] * counted[curr], 0);
};

module.exports = { calculateEntry, countEntrants };
