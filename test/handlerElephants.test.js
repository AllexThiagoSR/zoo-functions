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

  it('Teste: Se retorna a string "NW" quando for passada a string "location" como parâmetro', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
    expect(handlerElephants('popularity')).toBe(5);
  });
});
