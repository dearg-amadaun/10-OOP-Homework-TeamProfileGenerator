/*Intern tests*/  
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "University";
  const e = new Intern("Foo", 1, "email@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "email@email.com", "University");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "University";
  const e = new Intern("Foo", 1, "email@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});