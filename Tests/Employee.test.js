//need to use employee constructor again

const Employee = require('../lib/Employee');

//test getting the employee info

test('get employee info', () => {
    const employee = new Employee ('Bob', 250, 'xxxx@gmail.com', 'Engineer');


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeid).toEqual(expect.any(Number));
    expect(employee.emailaddress).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});
