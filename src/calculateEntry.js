const data = require('../data/zoo_data');

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => entrants.reduce((count, { age }) => {
  let { child, adult, senior } = count;
  if (age < 18) child += 1;
  else if (age >= 18 && age < 50) adult += 1;
  else senior += 1;
  return { child, adult, senior };
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  // seu código aqui
};

console.log(countEntrants(entrant));
module.exports = { calculateEntry, countEntrants };
