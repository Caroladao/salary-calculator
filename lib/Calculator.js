class Calculator {

  getSalary( employee ) {
    switch ( employee.post ) {
      case 'Developer' :
        if ( employee.baseSalary < 3000 ) {
          return employee.baseSalary * 0.9;
        } else {
          return employee.baseSalary * 0.8;
        }

      case 'DBA' :
      case 'Tester' :
        if ( employee.baseSalary < 2000 ) {
          return employee.baseSalary * 0.85;
        } else {
          return employee.baseSalary * 0.75;
        }

      case 'Manager' :
        if ( employee.baseSalary < 5000 ) {
          return employee.baseSalary * 0.80;
        } else {
          return employee.baseSalary * 0.70;
        }
    }      
  }
}

module.exports = Calculator;