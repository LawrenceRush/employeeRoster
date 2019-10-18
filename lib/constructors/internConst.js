Employee = require("./employeeConst")


class  Intern extends Employee {
    constructor(id, name, email, school) {
      const role = "Intern"
        
      super(id, name, role, email);
      this.school = school
      
     
    }
}

module.exports = Intern;