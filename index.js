
const inquirer = require("inquirer");
const fs = require('fs')

const generateHtml = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeData = [];

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
            message: "What is the manager's office? (Required)",
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


};

const promptEmployee = (employeeData) => {
    console.log(`
==============================
Adding a Employee to the Team
==============================
`);
    // If there's no 'employees' array property, create one
    if (!employeeData.employee) {
        employeeData.employee = [];
    }
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
        .then(teamData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github)
            }
            else if (role === 'Intern') {
                employee = new Intern(name, id, email, github)
            }

            employeeData.employee.push(teamData);
            if (teamData.employeesAdded) {
                return promptEmployee(employeeData);
            } else {
                return employeeData;
            }
        });
};

createTeam()
    .then(promptEmployee)
    .then((employeeData) => {
        console.log(employeeData)
        return generateHtml(employeeData);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
        console.log('Working....')
    })
    .then((writeFileResponse) => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then((copyFileResponse) => {
        console.log(copyFileResponse);
    })
    .catch((err) => {
        console.log(err);
    });
