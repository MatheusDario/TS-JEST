import {
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
  CustomerOrderProtocol,
} from './interfaces/customer-protocol';

export class IndivdualCustumer
  implements IndividualCustomerProtocol, CustomerOrderProtocol
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(fistName: string, lastName: string, cpf: string) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  get Name(): string {
    return this.firstName + ' ' + this.lastName;
  }
  get IDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrderProtocol
{
  name: string;
  cpnj: string;

  constructor(name: string, cnpf: string) {
    this.name = name;
    this.cpnj = cnpf;
  }
  get Name(): string {
    return this.name;
  }
  get IDN(): string {
    return this.cpnj;
  }
}
