// I have taken the liberty of importing relevant files into this file. Apologies for not commenting this section out
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// TODO add an output directory, code snippet found via TabNine
const OUTPUT_DIR = path.join(__dirname, "Output")

// TODO output path to "team.html", code snippet found via TabNine
const team = path.join(OUTPUT_DIR, "team.html")

// imports htmlRender.js, renamed to render for simplicity
const create = require("./lib/htmlRender")
// creates teamArray
const teamArray = [];
// created idArray
const idArray = [];

// following snippet is to create the manager object using inquirer
function addManager() {
// questions to ask: name, id, email, office number
inquirer.prompt([
    {
    type: 'input',
    name: 'manName',
    message: "What is the name of the manager?",
    validate: input => {
        if (input !== "") {
            return true;
        }
        return ""
    }
    },
{
    type: 'input',
    name: 'manId',
    message: "What is the manager's id number?"
},
{
    type: 'input',
    name: 'manEmail',
    message: "What is the manager's email?"
},
{
    type: 'input',
    name: 'officeNumber',
    message: "What is the manager's office number?"
}
])
// creates manager object using answers
.then(answers => {
    // creates Manager object
    const manager = new Manager(answers.manName, answers.manEmail, answers.manId, answers.officeNumber);
    // push manager id to id array
    teamMembers.push(manager);
    // pushes manager id to id array
    idArray.push(answers.manId);
    // calls renderTeam();
    renderTeam();
})
}
// renderTeam() function creation
function renderTeam() {
// questions to ask: which team member do add, choices: engineer, intern, manager, or none
inquirer.prompt([{
    type: 'list',
    name: 'teamList',
    message: "Would you like to add any additional team members?",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
        "None"
    ]
}
]).then(userChoice => {
    switch (userChoice.memberChoice) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        case "Manager":
            addManager();
            break;
        default:
            buildTeam();
    }
})
// above adds engineer, add intern, add manager, default is renderTeam() function (Use switch cases for this)
}


// add engineer function
function addEngineer() {
    // questions to ask: engineer name, engineer id, engineer email, engineer github. returns as asking for input
    inquirer.prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "What is the name of your engineer?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the id of your engineer?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What is your engineer's GitHub link?"
        }
])
// with the answers, do the following:
.then(answers => {
    // create engineer object
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
    // push engineer to team member array
    teamArray.push(engineer);
    // adds engineer id to id array
    idArray.push(answers.engineerId);
    // calls renderTeam();
    renderTeam();
})
}




// add intern function
function addIntern() {
// questions to ask: intern name, intern email, intern id, intern school
inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: "What is the name of your intern?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the employee ID of your intern?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the email of your intern?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Where did this intern go to school?"
    }
])
// takes answers and puts them into the right places
.then(answers => {
// creates intern object using "new Intern" with the above input
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    // adds intern to team member array
    teamArray.push(intern);
// push intern id to id array
    idArray.push(answers.internId)
// calls renderTeam();
})
}


// renderTeam() function
function renderTeam() {
// if it exists, sync
if (!fs.existsSync(OUTPUT_DIR)) {
// make a directory
    fs.mkdirSync(OUTPUT_DIR)
// sync and/or write file to the output path, and it renders team members, encryption has to be utf-8
}
fs.writeFileSync(team, create(teamArray), "utf-8")
}
// reference team creation function
renderTeam();
