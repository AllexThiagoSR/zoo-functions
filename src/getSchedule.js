const data = require('../data/zoo_data');

const { species, hours } = data;

const getSchedule = (target) => {
  if (typeof target === 'string') return species.find(({ name }) => name === target).availability;
  return Object.keys(hours).reduce((days, currDay) => {
    const auxi = { ...days };
    auxi[currDay] = {};
    auxi[currDay].officeHour = `Open from ${hours[currDay].open}am until ${hours[currDay].close}pm`;
    auxi[currDay].exhibition = species.filter(({ availability: av }) => av.includes(currDay)).map(({ name }) => name);
    return auxi;
  }, {});
};

console.log(getSchedule());
module.exports = getSchedule;
