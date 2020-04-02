const Calculator = require( '../lib/Calculator' )
const { toBeDeepCloseTo } = require( 'jest-matcher-deep-close-to' )
expect.extend({ toBeDeepCloseTo })

const calculator = new Calculator();

describe( 'Calculator', () => {
  test( '', () => {
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