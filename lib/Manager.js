//each constructor must call back the employee one
const Employee = require("./Employee")

class Manager {
    constructor (name, employeeid, emailaddress) {
        this.name = name;
        this.employeeid = employeeid;
        this.emailaddress = emailaddress;
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

    getemployee() {
        return 'Manager'
    }
    
};

module.exports = Manager;
