const Employee = require('../lib/Employee.js')

test("Makes object", () => {
  const test = new Employee();
  expect(typeof(test)).toBe("object");
});

test("Sets name", () => {
  const name = "Timmy";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("Sets ID", () => {
  const testValue = 100;
  const test = new Employee("placeholder", testValue);
  expect(test.id).toBe(testValue);
});

test("Sets Email", () => {
  const testValue = "test@test.com";
  const test = new Employee("placeholder", 1, testValue);
  expect(test.email).toBe(testValue);
});
