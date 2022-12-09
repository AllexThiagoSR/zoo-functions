const data = require('../data/zoo_data');

const { species, hours } = data;

const closedDays = ['Monday'];

const filterSpeciesExhibition = (day) => species.filter(({ availability: av }) => av.includes(day));

const mapSpeciesExhibitionNames = (speciesOfDay) => speciesOfDay.map(({ name }) => name);

const creatDaySchedule = (day) => ({
  officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
  exhibition: mapSpeciesExhibitionNames(filterSpeciesExhibition(day)),
});

const creatClosedDay = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const checkAnimal = (animal) => species.find(({ name }) => name === animal);

const isClosed = (day) => (!closedDays.includes(day) ? creatDaySchedule(day) : creatClosedDay());

const getSchedule = (target) => {
  const days = Object.keys(hours);
  const animal = checkAnimal(target);

  if (animal !== undefined) return animal.availability;
  if (days.includes(target)) return { [target]: isClosed(target) };
  return days.reduce((schedule, currDay) => {
    const auxi = { ...schedule };
    auxi[currDay] = isClosed(currDay);
    return auxi;
  }, {});
};

// console.log(getSchedule('day'));
module.exports = getSchedule;
