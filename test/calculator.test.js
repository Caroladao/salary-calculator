const Calculator = require( '../lib/Calculator' )
const { toBeDeepCloseTo } = require( 'jest-matcher-deep-close-to' )
expect.extend({ toBeDeepCloseTo })

const calculator = new Calculator();

describe( 'Calculator', () => {
  test( '', () => {

  });

  

});