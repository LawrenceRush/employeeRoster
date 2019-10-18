Employee = require("./employeeConst")


class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
      const role = "Manager"
        
      super(id, name, role, email);
      this.officeNumber = officeNumber
      
     
    }
}

module.exports = Manager