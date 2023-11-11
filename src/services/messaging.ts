import { MessaginProtocol } from '../classes/interfaces/messagin-protocol';

export class Messagin implements MessaginProtocol {
  sendMessage(msg: string): void {
    console.log('Menssagem enviada: ', msg);
  }
}
