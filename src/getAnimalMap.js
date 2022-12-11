const data = require('../data/zoo_data');

const { species } = data;

// Função que receber um array e um boolean e com isso decide se o array será ordenado ou não
const sortedOrNo = (thingToSort, sort) =>
  (sort === true ? thingToSort.sort() : thingToSort);

// Obtem todas as localizações do data
const getLocations = () =>
  // Reduz o array de species para um array de localizações
  species.reduce((locations, { location }) =>
    (!locations.includes(location) ? [...locations, location] : locations), []);

// Filtra species por localização
const filterByLocation = (loc) => species.filter(({ location }) => location === loc);

// Filtra os residentes de uma espécies por sexo
const filterBySex = (residents, sexToFilter) =>
  residents.filter(({ sex }) => sexToFilter === sex);

// Mapeia o array de objetos passado como parâmetro para um array de strings, essas strings são os valores da chave name de cada objeto do array
const getNames = (speciesObj, sorted) => sortedOrNo(speciesObj.map(({ name }) => name), sorted);

// Transforma o array de objetos de especies para um array de objetos no formato { specieName: [namesOfResidents]}
// Filtadros pela localização e sues residentes são filtrados pelo sexo
const getNamesFiltererBySex = (animals, sex, sorted) =>
  animals.map(({ name, residents }) => ({ [name]: getNames(filterBySex(residents, sex), sorted) }));

// Cria uma mapa das espécies apenas com o nome das espécies
const nullMapMaker = (locations) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getNames(filterByLocation(currLoc)) }), {});

// Transforma o array de objetos de especies para um array de objetos no formato { specieName: [namesOfResidents]}
// Nesse caminho é filtrado apenas por localização
const getResidentsNames = (speciesOfLoc, sorted) =>
  speciesOfLoc.map(({ name, residents }) => ({ [name]: getNames(residents, sorted) }));

// Constroí o mapa com os nomes dos residentes de cada especíe
const mapMakerWNames = (locations, sorted) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getResidentsNames(filterByLocation(currLoc), sorted) }), {});

// Constroí o mapa com os nomes dos residentes filtrados por sexo
const mapMakerWAnimalSex = (locations, sex, sorted) =>
  locations.reduce((finalMap, currLoc) =>
    ({ ...finalMap, [currLoc]: getNamesFiltererBySex(filterByLocation(currLoc), sex, sorted) }),
  {});

// Retorna se o parâmetro passado é um objeto
const isObject = (obj) => typeof obj === 'object' && !Array.isArray(obj);

// Checa o caminho que deve seguir com base em includeNames e sex
const checkPath = ({ includeNames, sex, sorted }) => {
  if (includeNames && sex) return mapMakerWAnimalSex(getLocations(), sex, sorted);
  if (includeNames) return mapMakerWNames(getLocations(), sorted);
  return nullMapMaker(getLocations());
};

// Função principal
const getAnimalMap = (options) => {
  if (!isObject(options)) return nullMapMaker(getLocations());
  return checkPath(options);
};

module.exports = getAnimalMap;
