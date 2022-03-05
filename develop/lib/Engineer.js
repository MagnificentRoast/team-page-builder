// imports Employee.js module
const Employee = require('../lib/Employee');

// Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // getRole() function
    getRole() {
        return "Engineer"
    }
    // getGitHub() function
    getGithub() {
        return this.github;
    }
};

// exports Engineer
module.exports = Engineer;