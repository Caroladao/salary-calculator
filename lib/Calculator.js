class Calculator {

  getSalary( employee ) {
    switch ( employee.post ) {
      case 'Developer' :
        if ( employee.baseSalary < 3000 ) {
          return employee.baseSalary * 0.9;
        } else {
          return employee.baseSalary * 0.8;
        }

      case 'manager' :
        
        return '';   

      case 'tester' :
        
        return '';
        
      case 'DBA' :
        
        return '';
    }      
  }
}

module.exports = Calculator;