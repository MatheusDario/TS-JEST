import {
  Discount,
  NoDiscount,
  FiftyPercentDiscount,
  TenPercentDiscount,
} from './discount';

const creatSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Discount shout be have no discount', () => {
    const sut = creatSut(NoDiscount);
    expect(sut.calculate(95.99)).toBe(95.99);
  });

  it('Discount shoud aply 50% discount', () => {
    const sut = creatSut(FiftyPercentDiscount);
    expect(sut.calculate(100.5)).toBe(50.25);
  });

  it('Discount should aply 10% descount', () => {
    const sut = creatSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });
});
