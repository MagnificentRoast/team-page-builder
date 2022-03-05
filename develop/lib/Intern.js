// imports Employee module
const Employee = require('../lib/Employee');
// this function defines and exports intern data
class Intern extends Employee {
    // intern on top of referencing employee will also have the following:
    constructor(name, id, email, school) {
        super(name, id, email);
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