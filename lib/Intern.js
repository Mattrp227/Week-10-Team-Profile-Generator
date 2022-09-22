//each constructor must call back the employee one
const Employee = require("./Employee")

class Intern {
    constructor (name, employeeid, emailaddress, role) {
        this.name = name;
        this.employeeid = employeeid;
        this.emailaddress = emailaddress;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getemID() {
        return this.employeeid;
    }
    getemailAddress() {
        return this.emailaddress;
    }
    getrole() {
        return this.role;
        
    }

    getemployee() {
        return 'Intern'
    }
    
};

module.exports = Intern;
