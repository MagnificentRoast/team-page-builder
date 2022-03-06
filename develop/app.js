// I have taken the liberty of importing relevant files into this file. Apologies for not commenting this section out
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// TODO add an output directory, code snippet found via TabNine
const output_dir = path.join(__dirname, "output")

// TODO output path to "team.html", code snippet found via TabNine
const team = path.join(output_dir, "team.html")

// imports htmlRender.js, renamed to render for simplicity
const render = require("./lib/htmlRender")
// creates teamArray
const teamArray = [];
// created idArray
const idArray = [];

// following snippet is to create the manager object using inquirer
// questions to ask: name, id, email, office number,
// creates manager object using answers
// push manager id to id array
// calls renderTeam();

// renderTeam() function creation
// questions to ask: which team member do add, choices: engineer, ingern, manager, or none
// user choices will call the following command:
// add engineer, add intern, add manager, default is renderTeam() function

// add engineer function
// questions to ask: engineer name, engineer id, engineer email, engineer github. returns as asking for input

// with the answers, do the following:
// create engineer object
// push engineer to team member array
// calls renderTeam();

// add intern function
// questions to ask: intern name, intern email, intern id, intern school
// creates intern object using "new Intern" with the above input
// adds intern to team member array
// push intern id to id array
// calls renderTeam();

// renderTeam() function
// if it exists, sync
// make a directory
// sync and/or write file to the output path, and it renders team members, encryption has to be utf-8

// reference team creation function
