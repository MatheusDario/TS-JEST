import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>;
  // eslint-disable-next-line
  addItem(item: CartItem): void;
  // eslint-disable-next-line
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
