//need to use employee constructor again

const Engineer = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

//test getting the employee info

test('get employee info', () => {
    const Engineer = new Engineer ('Bob', 250, 'xxxx@gmail.com', 'Engineer');


    expect(engineer.name).toEqual(expect.any(String));
    expect(employee.employeeid).toEqual(expect.any(Number));
    expect(employee.emailaddress).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any('Engineer'));
});
