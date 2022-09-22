//need to use employee constructor again

const manager = require('../lib/Employee');
const Manager = require('../lib/Manager');


//test getting the manager's info

test('get manager info', () => {
    const manager = new Manager ('Bob', 250, 'xxxx@gmail.com');


    expect(manager.name).toEqual(expect.any(String));
    expect(manager.employeeid).toEqual(expect.any(Number));
    expect(manager.emailaddress).toEqual(expect.any(String));
});
