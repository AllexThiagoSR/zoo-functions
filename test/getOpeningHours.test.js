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
  it('Teste: Se retorna "The zoo is open" se for passado um dia e horário que zoológico deve estar aberto', () => {
    expect(getOpeningHours('wednesday', '8:30-am')).toBe('The zoo is open');
  });
  it('Teste: Se retorna "The zoo is close" se for passado parâmetros inválidos', () => {
    expect(getOpeningHours('', '')).toBe('The zoo is open');
  });
});
