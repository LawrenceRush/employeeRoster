const inquirer = require("inquirer")

var managerQuestions = () =>{

return inquirer
  .prompt([
    {
      name: 'name',
      message: 'Hello Team Manager! What is your name?',
      
    },
    {
        name: 'email',
        message: 'What is your email?',
        
      },
      {
        name: 'OfficeNumber',
        message: 'What is your office number?',
        
      },
      {
        name: 'Employees',
        message: 'How many employees do you have?',
        
      },
  ])
  
}

module.exports = managerQuestions;

