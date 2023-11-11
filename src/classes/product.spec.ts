import { Product } from './product';

const creatSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Product shout be return product', () => {
    const sut = creatSut('T-Shirt', 49.99);

    expect(sut).toHaveProperty('name', 'T-Shirt');
    expect(sut.price).toBeCloseTo(49.99);
  });
});
