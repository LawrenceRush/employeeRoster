const inquirer = require("inquirer")

var employeeType = (i) =>{
  let index = i+1;
  index = String(index)
  console.log(index);

return inquirer
  
.prompt([
    {
      name: 'type',
      message: 'What is the type of employee ' + index,
      
    },
  ])
 
}

module.exports = employeeType;
