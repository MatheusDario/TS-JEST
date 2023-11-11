import { EnterpriseCustomer, IndivdualCustumer } from './customer';

const creatIdividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndivdualCustumer => {
  return new IndivdualCustumer(firstName, lastName, cpf);
};

const creatEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('IndividualCustomer should have firstName, lastName and cpf', () => {
    const sut = creatIdividualCustomer(
      'Matheus Dario',
      'Silva',
      '028.129.931-54',
    );
    expect(sut).toHaveProperty('firstName', 'Matheus Dario');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '028.129.931-54');
  });

  it('IndividualCustomer should have methods get name and cpf', () => {
    const sut = creatIdividualCustomer('Matheus', 'Dario', '028.129.931-54');
    expect(sut.Name).toBe('Matheus Dario');
    expect(sut.IDN).toBe('028.129.931-54');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = creatEnterpriseCustomer('TabSolutions', '00.001.00001-06');
    expect(sut).toHaveProperty('name', 'TabSolutions');
    expect(sut.cpnj).toBe('00.001.00001-06');
  });

  it('should have methods get name and cnpj', () => {
    const sut = creatEnterpriseCustomer('TabSolutions', '00.001.00001-06');
    expect(sut.Name).toBe('TabSolutions');
    expect(sut.IDN).toBe('00.001.00001-06');
  });
});
