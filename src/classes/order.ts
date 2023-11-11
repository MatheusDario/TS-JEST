import { OrderStatus } from './interfaces/order-status';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessaginProtocol } from './interfaces/messagin-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // eslint-disable-next-line
  constructor(private readonly cart: ShoppingCartProtocol,
    // eslint-disable-next-line
    private readonly sendMessage: MessaginProtocol,
    // eslint-disable-next-line
    private readonly persistency: PersistencyProtocol,
    // eslint-disable-next-line
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'close';
    this.sendMessage.sendMessage(
      `Seu pedido no valor de R$ ${this.cart.totalWithDiscount()} foi enviado!`,
    );
    this.persistency.saveOrder();
    console.log(`O cliente é: ${this.customer.Name}, ${this.customer.IDN}`);
    this.cart.clear();
  }
}
