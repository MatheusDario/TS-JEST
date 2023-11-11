import { Messagin } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

const shoppingCart = new ShoppingCart(new FiftyPercentDiscount());
const messaging = new Messagin();
const persistency = new Persistency();
const enterpriseCustomer = new EnterpriseCustomer(
  'Shit Soluções',
  '44.001.0000-01',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);
shoppingCart.addItem(new Product('T-Shirt', 99.99));
shoppingCart.addItem(new Product('Shoes', 199.99));
shoppingCart.addItem(new Product('Hat', 59.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
