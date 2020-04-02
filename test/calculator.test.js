const Calculator = require( '../lib/Calculator' )
const { toBeDeepCloseTo } = require( 'jest-matcher-deep-close-to' )
expect.extend({ toBeDeepCloseTo })

const calculator = new Calculator();

describe( 'Calculator', () => {
  test( 'Developer with base salary less than 3000', () => {
    let employee = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      baseSalary: 2000.00,
      post: 'Developer'
    }
    
    let salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 1800.00, 2 );
  });

  test( 'Developer with base salary greater than 3000', () => {
    let employee = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      baseSalary: 5000.00,
      post: 'Developer'
    }
    
    let salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 4000.00, 2 );
  });

  

});