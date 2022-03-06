// imports Employee module
const Employee = require('../lib/Employee');
// this function defines and exports intern data
class Intern extends Employee {
    // constructor captures the information from inquirer
    constructor(name, id, email, school) {
        // this references name id and email from Employee...
        super(name, id, email);
        // adds school to the constructor of Intern only
        this.school = school;
    }
    // getRole is overridden by "Intern"
    getRole() {
        return "Intern";
    };
    // This displays school information
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;