import { Messagin } from './messaging';

const creatSut = () => {
  return new Messagin();
};

describe('Messagin', () => {
  afterEach(() => jest.clearAllMocks());

  it('Messagin shout be return undefined', () => {
    const sut = creatSut();

    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('Shuld be called console.log once', () => {
    const sut = creatSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Shuld call console.log with "Menssagem enviada: and msg"', () => {
    const sut = creatSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledWith('Menssagem enviada: ', 'test');
  });
});
