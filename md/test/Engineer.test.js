/*Engineer tests*/
const Engineer = require("../lib/Employee");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHub";
  const e = new Engineer("Foo", 1, "email@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "email@email.com", "GitHub");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHub";
  const e = new Engineer("Foo", 1, "email@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});