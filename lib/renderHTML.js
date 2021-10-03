const path = require('path');
const fs = require('fs');

const examplesDir = path.resolve(__dirname, "../examples");

const render = employees => {
    const html = [];
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
        .join(""));
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
        .join(""));
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
        .join(""));

        const finishHtml = html.join("");
        return renderClasses(finishHtml);
};

// retrieves html template, updates it and returns it. same for each role/card
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(examplesDir, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "office", manager.getOffice());
    return template;
};
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(examplesDir, "engineer.html"), "utf-8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(examplesDir, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

const renderClasses = html => {
    const template = fs.readFileSync(path.resolve(examplesDir, "indexExample.html"), "utf-8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;