const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('Teste: Se handlerElephants existe e é uma função', () => {
    expect(handlerElephants).not.toBeUndefined();
    expect(handlerElephants).toBeInstanceOf(Function);
  });
});
