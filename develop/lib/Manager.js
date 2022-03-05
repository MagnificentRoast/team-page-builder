// Imports Employee module
const Employee = require('../lib/Employee');

class Manager extends Employee {
    // constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // getRole()
    getRole() {
        return "Manager";
    };
    // getOfficeNumber()
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;