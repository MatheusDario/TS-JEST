import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(
    // eslint-disable-next-line
    public name: string,
    // eslint-disable-next-line
    public price: number,
  ) {}
}
