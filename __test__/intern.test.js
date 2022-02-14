const Intern = require("../lib/Intern");

test("Sets school object", () => {
  const testValue = "UCLA";
  const test = new Intern("placeholder", 1, "test@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("Sets Role", () => {
  const testValue = "Intern";
  const test = new Intern("placeholder", 1, "test@test.com", "UCLA");
  expect(test.getRole()).toBe(testValue);
});

test("Gets School", () => {
  const testValue = "UCLA";
  const test = new Intern("placeholder", 1, "test@test.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});