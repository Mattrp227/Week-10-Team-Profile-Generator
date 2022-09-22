//need to use employee constructor again

const Intern = require('../lib/Employee');
const Intern = require('../lib/Intern');

//test getting the employee info

test('get employee info', () => {
    const intern = new Intern ('Bob', 250, 'xxxx@gmail.com', 'Intern');


    expect(intern.name).toEqual(expect.any(String));
    expect(intern.employeeid).toEqual(expect.any(Number));
    expect(intern.emailaddress).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any('Intern'));
});
