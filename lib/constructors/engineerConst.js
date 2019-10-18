Employee = require("./employeeConst")


class  Engineer extends Employee {
    constructor(id, name, email, github) {
      const role = "Engineer"
        
      super(id, name, role, email);
      this.github = github
      
     
    }
}

module.exports = Engineer;