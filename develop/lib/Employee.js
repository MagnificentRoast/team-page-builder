// This file defines and exports Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // getName() function returns name of employee
    getName() {
        return this.name;
    };
    // getId() returns id of Employee
    getId() {
        return this.id;
    };
    // getEmail returns email of Employee
    getEmail() {
        return this.email;
    };
    // getRole() returns role of Employee as "Employee"
    getRole() {
        return "Employee";
    };
};

module.exports = Employee;