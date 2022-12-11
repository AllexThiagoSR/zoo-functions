const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste: Se getOpeningHours realmente existe e é uma função', () => {
    expect(getOpeningHours).not.toBeUndefined();
    expect(getOpeningHours).toBeInstanceOf(Function);
  });
  it('Teste: Se retorna hours de zoo-data.js ao não passar parâmetro algum', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
