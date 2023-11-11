describe('Primary tests', () => {
  it('Shuld be a number ten', () => {
    const numberTen = 10;
    expect(numberTen).toBe(10);
    expect(numberTen).toEqual(10);
    expect(numberTen).not.toBeNull();
  });
});

describe('Tests with objects', () => {
  it('Shuld be a object', () => {
    const person = { name: 'Matheus Dario', age: 26 };
    const anotherPerson = { ...person };

    expect(anotherPerson).toEqual(person);
  });
});
