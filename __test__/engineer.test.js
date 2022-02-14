const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Engineer = require('../lib/Engineer.js')

test("Sets Github Object", () => {
  const test = "Username";
  const test2 = new Engineer("placeholder", 1, "test@test.com", testValue);
  expect(test2.github).toBe(testValue);
});

test("Sets Role", () => {
  const test = "Engineer";
  const test2 = new Engineer("placeholder", 1, "test@test.com", "GitHubUser");
  expect(test2.getRole()).toBe(testValue);
});

test("Set Github Username", () => {
  const test = "Username";
  const test2 = new Engineer("placeholder", 1, "test@test.com", testValue);
  expect(test2.getGithub()).toBe(testValue);
});