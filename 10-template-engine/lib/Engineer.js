// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer{
    constructor (name, id, email,github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGihub(){
        return this.github;

    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer;