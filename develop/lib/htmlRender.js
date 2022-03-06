const fs = require('fs');
const path = require('path');

const templatesDirectory = path.resolve(__dirname, "../templates");

// employee rendering
const create = employees => {
    // TODO initiates array
    const html = [];
    // TODO gets roles for the following: manager, engineer, intern, then...
    html.push(employees.filter(employee.getRole() === "Manager").map(manager => createManager(manager))
    );
    html.push(employees.filter(employee.getRole() === "Engineer").map(engineer => createEngineer(engineer))
    );
    html.push(employees.filter(employee.getRole() === "Intern").map(intern => createIntern(intern))
    );
    // TODO join it here
    return createMain(html.join(""));
}



module.exports = create;