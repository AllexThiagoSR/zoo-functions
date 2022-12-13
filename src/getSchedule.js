const { species, hours } = require('../data/zoo_data');

const closedDays = ['Monday'];

const specieExhibition = (day) => species.filter(({ availability: av }) => av.includes(day));

const mapSpeciesExhibitionNames = (speciesOfDay) => speciesOfDay.map(({ name }) => name);

const creatDaySchedule = (day) => ({
  officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
  exhibition: mapSpeciesExhibitionNames(specieExhibition(day)),
});

const creatClosedDay = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const checkAnimal = (animal) => species.find(({ name }) => name === animal);

const creatClosedOrNotClosed = (day) =>
  (!closedDays.includes(day) ? creatDaySchedule(day) : creatClosedDay());

const getSchedule = (target) => {
  const days = Object.keys(hours);
  const animal = checkAnimal(target);
  if (animal !== undefined) return animal.availability;
  if (days.includes(target)) return { [target]: creatClosedOrNotClosed(target) };
  return days.reduce((schedule, currDay) =>
    ({ ...schedule, [currDay]: creatClosedOrNotClosed(currDay) }), {});
};

module.exports = getSchedule;
