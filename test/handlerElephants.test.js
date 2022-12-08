const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Teste: Se handlerElephants existe e é uma função', () => {
    expect(handlerElephants).not.toBeUndefined();
    expect(handlerElephants).toBeInstanceOf(Function);
  });

  it('Teste: Se retorna undefined ao não ser passado parâmetro algum', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Teste: Se retorna a string "NW" quando for passada a string "location" como parâmetro', () => {
    expect(typeof handlerElephants('location')).toBe('string');
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Teste: Se retorna 5 quando for passada a string "popularity" como parâmetro', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Teste: Se retorna um array com dias da semana quando for passada a string "availability" como parâmetro', () => {
    expect(Array.isArray(handlerElephants('availability'))).toBe(true);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Teste: Se retorna 10.5 com dias da semana quando for passada a string "averageAge" como parâmetro', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
