//create manager for html

const beginManager = function (manager) {
    return `
    <div class = "MANAGER">
    <div class = "header">
    <h1>${manager.name}</h1>
    </div>
    <div class = "manager info">
    <p class = "employeeid"> ID Number: ${manager.employeeid}</p>
    <p class = "emailaddress"> Email Address: ${manager.emailadress}</p>
    <p class = "officelocationnumber"> Office Number: ${manager.officelocationnumber}</p>
    </div>
    </div>
    
    
    `
}


//create employee
const promptEmployees = function (employee) {
    return `
    <div class = "EMPLOYEE">
    <div class = "header">
    <h1>${employee.name}</h1>
    </div>
    <div class="manager info">\
    <p class = "role"> role: ${employee.role}</p>
    <p class = "employeeid"> ID Number: ${employee.employeeid}</p>
    <p class = "emailaddress"> Email Address: ${employee.emailadress}</p>
    <p class = "officelocationnumber"> Office Number: ${employee.officelocationnumber}</p>
    </div>
    </div>
    
    
    `
}
