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
        if ( employee.baseSalary < 2000 ) {
          return employee.baseSalary * 0.85;
        } else {
          return employee.baseSalary * 0.75;
        }
        
        return '';   

      case 'tester' :
        
        return '';
        
      case 'manager' :
        
        return '';
    }      
  }
}

module.exports = Calculator;