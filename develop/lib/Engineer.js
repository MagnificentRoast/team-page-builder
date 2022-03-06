// imports Employee.js module
const Employee = require('../lib/Employee');

// Engineer class
class Engineer extends Employee {
    //constructor has data from Employee.js...
    constructor(name, id, email, github) {
        // this references the constructor from Employee.js
        super(name, id, email);
        // adds github to the constructor for Engineer only
        this.github = github;
    }
    // getRole() overrides "Employee" with "Engineer"
    getRole() {
        return "Engineer"
    }
    // this captures and returns github information
    getGithub() {
        return this.github;
    }
};

// exports Engineer
module.exports = Engineer;