const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { test, expect } = require("@jest/globals");

test('it should give you an office number', () =>{
    const testOffice = 101;
    const testManager = new Manager('test', 1, 'test@test.com', testOffice);
    expect(testManager.office).toBe(testOffice);
});

test('Role should be manager', () => {
    const testRole = 'Manager';
    const testManager = new Manager('test', 1, 'test@test.com', 101);
    expect(testManager.getRole()).toBe(testRole);
});