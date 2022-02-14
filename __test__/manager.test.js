const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 9;
  const test = new Manager("placeholder", 1, "test@test.com", testValue);
  expect(test.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const test = new Manager("placeholder", 1, "test@test.com", 9);
  expect(test.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const test = new Manager("placeholder", 1, "test@test.com", testValue);
  expect(test.getOfficeNumber()).toBe(testValue);
});