const path = require('path');
const fs = require('fs');

const templateDirectory = path.resolve(__dirname, "../templates");

// create function
const create = employees => {
    // html array
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        );

        return createMain(html.join(""))
    }

// create Manager
const createManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getRole());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

// create Engineer
// needs name, role, email, id, github
const createEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "engineer.html"), "utf-8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
}
// create Intern
// needs name, role, email, id, school
const createIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
}

// create Main
const createMain = html => {
    const template = fs.readFileSync(path.resolve(templateDirectory, "main.html"), "utf-8");
    return replacePlaceholders(template, "main", html);
};

// create placeholders
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value)
}
// replace placeholders

module.exports = create;