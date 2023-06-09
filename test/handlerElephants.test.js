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

  it('Teste: Se retorna 10.5 quando for passada a string "averageAge" como parâmetro', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Teste: Se retorna 4 quando for passada a string "count" como parâmetro', () => {
    expect(typeof handlerElephants('count')).toBe('number');
    expect(handlerElephants('count')).toBe(4);
  });

  it('Teste: Se retorna um array com nomes quando for passada a string "names" como parâmetro', () => {
    expect(Array.isArray(handlerElephants('names'))).toBe(true);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Teste: Se retorna null quando for passada uma string de um argumento que não existe como parâmetro', () => {
    expect(handlerElephants('ages')).toBeNull();
  });

  it('Teste: Se retorna a string "Parâmetro inválido, é necessário uma string" quando for passada um parâmetro de um tipo diferente de string', () => {
    expect(typeof handlerElephants(1)).toBe('string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
