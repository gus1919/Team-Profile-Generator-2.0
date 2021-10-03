const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('It should give you the github account', () => {
    const testGithub = 'testUser';
    const testEngineer = new Engineer('test', 2, 'test@test.com', testGithub);
    expect(testEngineer.github).toBe(testGithub);
});

test('Role should be Engineer', () => {
    const testRole = 'Engineer';
    const testEngineer = new Engineer('test', 2, 'test@test.com', 'testUser');
    expect(testEngineer.getRole()).toBe(testRole);
});