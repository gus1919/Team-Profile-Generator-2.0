const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const render = require("./lib/renderHtml");

let employeeArray = [];

const employeeQuestions = () => {
  return inquirer.prompt([
    
//Initial Questions for all employees

    {
        type: 'list',
        name: 'role',
        message: 'What is the Employee\'s Role?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    ])
    .then(answer => {
        if (answer.role === 'Manager') {
            managerQuestions();
        } else if
        (answer.role === 'Engineer') {
            engineerQuestions();
        } else if
        (answer.role === 'Intern') {
            internQuestions();
        }
        else {
            console.log('Done.');
            return;
        }
    })
};

employeeQuestions();

// Manager Questions
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter the Employee\'s ID Number.',
          },
          {
            type: 'input',
            name: 'name',
            message: 'Please Enter the Employee\'s Name.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please Enter the Employee\'s Email Address.',
          },
        {
            type: 'input',
            message: 'What is the Manager\'s office number?',
            name: 'office',
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to enter another employee?',
        },
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        employeeArray.push(manager);
        console.log(employeeArray);
        if (answers.continue) {
            employeeQuestions();
        } else {
            let data = render(employeeArray);
            fs.writeFile(distPath, data, (err) => {
                if (err) throw err;
                console.log('The file has been saved');
            });
        }
    })
};

// Engineer Questions
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter the Employee\'s ID Number.',
          },
          {
            type: 'input',
            name: 'name',
            message: 'Please Enter the Employee\'s Name.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please Enter the Employee\'s Email Address.',
          },
        {
            type: 'input',
            message: 'What is the Engineer\'s github name?',
            name: 'github',
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to enter another employee?',
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer);
        console.log(employeeArray);
        if (answers.continue) {
            employeeQuestions();
        } else {
            let data = render(employeeArray);
            fs.writeFile(distPath, data, (err) => {
                if (err) throw err;
                console.log('The file has been saved');
            });
        }
    })
};

// Intern Questions
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Please Enter the Employee\'s ID Number.',
          },
          {
            type: 'input',
            name: 'name',
            message: 'Please Enter the Employee\'s Name.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please Enter the Employee\'s Email Address.',
          },
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'school',
        },
        {
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to enter another employee?',
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        console.log(employeeArray);
        if (answers.continue) {
            employeeQuestions();
        } else {
            let data = render(employeeArray);
            fs.writeFile(distPath, data, (err) => {
                if (err) throw err;
                console.log('The file has been saved');
            });
        }
    })
};