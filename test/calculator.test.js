const Calculator = require( '../lib/Calculator' )
const { toBeDeepCloseTo } = require( 'jest-matcher-deep-close-to' )
expect.extend({ toBeDeepCloseTo })

const calculator = new Calculator();

describe( 'Calculator', () => {
  test( 'Developer with base salary less than 3000', () => {
    const employee = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      baseSalary: 2000.00,
      post: 'Developer'
    }
    
    const salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 1800.00, 2 );
  });

  test( 'Developer with base salary greater than 3000', () => {
    const employee = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      baseSalary: 5000.00,
      post: 'Developer'
    }
    
    const salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 4000.00, 2 );
  });

  test( 'DBA with base salary less than 2000', () => {
    const employee = {
      name: 'Maria Lopez',
      email: 'marialopez@email.com',
      baseSalary: 1500.00,
      post: 'DBA'
    }
    
    const salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 1275.00, 2 );
  });

  test( 'Developer with base salary greater than 2000', () => {
    const employee = {
      name: 'Maria Lopez',
      email: 'marialopez@email.com',
      baseSalary: 3500.00,
      post: 'DBA'
    }
    
    const salary = calculator.getSalary( employee );
    expect( salary ).toBeDeepCloseTo( 2625.00, 2 );
  });

  

});