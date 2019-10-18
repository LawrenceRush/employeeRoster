const fs = require("fs");
const inquirer = require("inquirer");
const managerQuestions = require("./lib/managerQuestions");
const employeeTypeQ = require("./lib/employeeTypeQ");
const internQuestions = require("./lib/internQuestions");
const engineerQuestions = require("./lib/engineerQuestions");
const Manager = require("./lib/constructors/managerConst");
const Intern = require("./lib/constructors/internConst");
const Engineer = require("./lib/constructors/engineerConst");
const generateHtml = require("./lib/htmlStuff/generateHTML")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
var employees = []
async function askSomeQuestions () {
    
    let managerAnswers = await managerQuestions();
    employees.push(new Manager(1, managerAnswers.name, managerAnswers.email , managerAnswers.officeNumber))
    let i = 0;
    while ( i < parseInt(managerAnswers.employeesNum)){
        let employeetype = await employeeTypeQ(i);
        console.log(employeetype)
        switch(employeetype.Role) {
            case "Intern":
              employeeAnswers = await internQuestions(i);
              employees.push(new Intern(i+2, employeeAnswers.name, employeeAnswers.email , employeeAnswers.school))
              break;
            case "Engineer":
              employeeAnswers = await engineerQuestions(i);
              employees.push(new Engineer(i+2, employeeAnswers.name, employeeAnswers.email , employeeAnswers.github))
              break;
             }
        i++;
    }
    
    
    writeFileAsync("index.html", generateHtml(employees));
    
}

askSomeQuestions();
module.exports = employees;