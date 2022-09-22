//Create variable index.js that link to other files

const thisTeam = [];
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

//Begin asking user for information about themselves

const beginManager = () => {
    return inquirer.prompt ([
        {
            //ask for name
        type: 'input',
        name: 'name',
        question: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;

            }
            else {
                return false
                console.log ('Name?');
            }
        }
    },
    {
        //ask for id
        type: 'input',
        name: 'employeeid',
        question: 'What is your employee id number?',
        validate: idInput => {
            if (idInput) {
                return true;

            }
            else {
                return false
                console.log ('Id number?');
            }
        }   
    },
    {
        //ask for office number
        type: 'input',
        name: 'officelocationnumber',
        question: 'What is your office location number?',
        validate: officeInput => {
            if (officeInput) {
                return true;

            }
            else {
                return false
                console.log ('Office?');
            }
        }   
    },
    {
        //ask for email
        type: 'input',
        name: 'emailaddress',
        question: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;

            }
            else {
                return false
                console.log ('emailaddress');
            }
        }   
    },
   
    ])

    .then (managerInfo => {
        const manager = new Manager (name, employeeid, officelocationnumber, emailaddress);
        const {name, employeeid, officelocationnumber, emailaddress} = managerInfo;

        thisTeam.push(manager);
        
    })
};


//now that manager has been added need to add employees

const promptEmployees = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'role',
        message: 'what is your role?',
        },
        

        {
            //ask for name
        type: 'input',
        name: 'name',
        question: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;

            }
            else {
                return false
                console.log ('Name?');
            }
        }
    },
    {
        //ask for id
        type: 'input',
        name: 'employeeid',
        question: 'What is your employee id number?',
        validate: idInput => {
            if (idInput) {
                return true;

            }
            else {
                return false
                console.log ('Id number?');
            }
        }   
    },
    {
        //ask for office number
        type: 'input',
        name: 'officelocationnumber',
        question: 'What is your office location number?',
        validate: officeInput => {
            if (officeInput) {
                return true;

            }
            else {
                return false
                console.log ('Office?');
            }
        }   
    },
    {
        //ask for email
        type: 'input',
        name: 'emailaddress',
        question: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;

            }
            else {
                return false
                console.log ('emailaddress');
            }
        }   
    },



    ])

    .then (Employeeinfo => {
        const employee = new Employee (role, name, employeeid, officelocationnumber, emailaddress);
        const {role, name, employeeid, officelocationnumber, emailaddress} = Employeeinfo;

        thisTeam.push(employee);
});

}
