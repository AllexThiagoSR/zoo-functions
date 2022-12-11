const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const opened = 'The zoo is open';

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
    expect(getOpeningHours('wednesday', '8:30-am')).toBe(opened);
    expect(getOpeningHours('sunday', '1:30-pm')).toBe(opened);
    expect(getOpeningHours('sunday', '12:30-pm')).toBe(opened);
  });
  // it('Teste: Se retorna "The zoo is close" se for passado um dia inválido', () => {
  //   expect(getOpeningHours('day', '8:00-pm')).toBe(closed);
  //   expect(getOpeningHours('monday', '8:00-pm')).toBe(closed);
  // });
  it('Teste: Se retorna "The zoo is close" se for passado um horário que o zoológico devia estar fechado', () => {
    expect(getOpeningHours('thursday', '8:00-pm')).toBe(closed);
    expect(getOpeningHours('tuesday', '1:00-am')).toBe(closed);
    expect(getOpeningHours('sunday', '12:30-am')).toBe(closed);
    expect(getOpeningHours('monday', '1:00-pm')).toBe(closed);
  });
  it('Teste: Se lança os erros corretamente', () => {
    expect(() => getOpeningHours('thrsday', '8:00-pm')).toThrow();
    expect(() => getOpeningHours('thrsday', '8:00-pm')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('tuesday', '13:00-am')).toThrow();
    expect(() => getOpeningHours('tuesday', '13:00-am')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('saturday', '1:100-pm')).toThrow();
    expect(() => getOpeningHours('saturday', '1:100-pm')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('monday', 'a')).toThrow();
    expect(() => getOpeningHours('monday', 'a')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('sunday', '7:00-gm')).toThrow();
    expect(() => getOpeningHours('sunday', '7:00-sm')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
