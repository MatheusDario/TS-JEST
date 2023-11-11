export interface CustomerOrderProtocol {
  get Name(): string;
  get IDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cpnj: string;
}
