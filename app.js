const fs = require("fs");
const inquirer = require("inquirer");
const ManagerQuestions = require("./lib/managerQuestions");
const employeeTypeQ = require("./lib/employeeTypeQ");



async function askSomeQuestions () {
    let managerAnswers = await ManagerQuestions();
    console.log(managerAnswers)
    
}

askSomeQuestions();