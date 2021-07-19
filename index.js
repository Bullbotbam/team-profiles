
const inquirer = require("inquirer");
const fs = require('fs')

const generateHtml = require("./src/page-template");
const writeFile = require("./utils/generate-site");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamData = [];

const createTeam = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name for this team? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide the manager's name for this team.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID for this manager? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the ID# for this manager.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            },
        },

    ])
    .then(answers=>{
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
        teamData.push(manager);
        console.log(manager, 'manager data')
    })


};

const promptEmployee = () => {
    console.log(`
==============================
Adding an Employee to the Team
==============================
`);
   
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: ["Engineer", "Intern"]

            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name? (Required)",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the employee's name for this team.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "What is the ID for this employee? (Required)",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the ID# for this employee.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email? (Required)",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's email.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's GitHub username? (Required)",
                when: (input) => input.role === "Engineer",
                validate: (githubInput) => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter employee's GitHub username.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "school",
                message: "WWhat school is the employee's attending? (Required)",
                when: (input) => input.role === "Intern",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter interns school name.");
                        return false;
                    }
                },

            },
            {
                type: "confirm",
                name: "employeesAdded",
                message: "Add additional team profiles...",
                default: false

            },

        ])
//        
.then(employeeData => {
    // data for employee types 

    let { name, id, email, role, github, school, employeesAdded } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamData.push(employee); 

    if (employeesAdded) {
        return promptEmployee(teamData); 
    } else {
        return teamData;
    }
})

};

createTeam()
.then(
    promptEmployee)
    .then(teamData => {
        return generateHtml(teamData)
    })
    .then((pageHTML) => {
        console.log('Working....')
        return writeFile(pageHTML);
        
    })
    .catch((err) => {
    console.log(err);
});
