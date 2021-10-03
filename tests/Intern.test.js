const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('It should give you his school', () => {
    const testSchool = 'testSchool';
    const testIntern = new Intern('test', 3, 'test@test.com', testSchool);
    expect(testIntern.school).toBe(testSchool);
});

test('Role should be Intern', () => {
    const testRole = 'Intern';
    const testIntern = new Intern('test', 2, 'test@test.com', 'testSchool');
    expect(testIntern.getRole()).toBe(testRole);
});