//Node requirments
const inquirer = require("inquirer");
const util = require("util");
const path = require('path');
const fs = require("fs");

//Profile generation
const generateHtml = ('./src/generated.html')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern');
const { createInflate } = require("zlib");
const team = [];

// Function call to initialize app
function init() {
    addTeamMember();
}
function addTeamMember() {
    inquirer.prompt([{
        type: 'list',
        name: 'memberType',
        message: 'Would you like to add another team member?',
        choice: ['Manager', 'Engineer', 'Intern', 'None']
    }]).then(val => {
        if (typeof choice === 'Manager') {
            managerPrompt();
        } else if (typeof choice === 'Engineer') {
            engineerPrompt();
        } else if (typeof choice === 'Intern') {
            internPrompt();
        } else {
            createFile();
        }
    })
}
function managerPrompt() {
    inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Please input team manager name.'
        },{
            type: 'input',
            name: 'id',
            message: 'Please input team manager ID number:'
        },{
            type: 'input',
            name: 'email',
            message: 'Please input team manager email address:'
        },{
            type: 'input',
            name: 'officeNumber',
            message: 'Team manager office number:'
        }
    ]).then(val => {
        const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
        team.push(manager);
        addTeamMember();
    })
};
function engineerPrompt() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please input engineer name.'
    },{
        type: 'input',
        name: 'id',
        message: 'Please input engineer ID Number:'
    },{
        type: 'input',
        name: 'email',
        message: 'Please input engineer email:'
    },{
        type: 'input',
        name: 'github',
        message: 'Please enter the URL of the engineer GitHub profile.'
    }
    ]).then(val => {
        const engineer = new Engineer(val.name. val.id, val.email, val.github);
        team.push(engineer)
        addTeamMember();
    })
};
