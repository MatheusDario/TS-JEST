import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('Persistency shout be return undefined', () => {
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Shuld be called console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Shuld call console.log with "Seu pedido foi salvo"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Seu pedido foi salvo');
  });
});
