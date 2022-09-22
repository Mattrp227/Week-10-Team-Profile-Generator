class Employee {
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
        return 'Employee'
    }
    
};

module.exports = Employee;
