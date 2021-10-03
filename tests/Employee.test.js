const Employee = require('../lib/Employee');

test('get name should give you a name', () => {
    const employee = new Employee('test', 1, 'test@test.com');
    expect(employee.getName()).toBe('test')
});

test('get ID should give you a number', () => {
    const employee = new Employee('test', 1, 'test@test.com');
    expect(employee.getId()).toBe(1)
});

test('get email should give you an email address', () => {
    const employee = new Employee('test', 1, 'test@test.com');
    expect(employee.getEmail()).toBe('test@test.com')
});