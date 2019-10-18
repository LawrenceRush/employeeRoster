const inquirer = require("inquirer")

var employeeType = (i) =>{
  let index = i+1;
  index = String(index)
  

return inquirer
  
.prompt([
    {
      type: "list",
      name: 'Role',
      message: 'What is the Role of Employee ' + index,
      choices: ["Engineer", "Intern"]
    },
  ])
 
}

module.exports = employeeType;
