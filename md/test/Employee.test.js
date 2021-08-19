/*Employee Tests */
const Employee = require("../lib/Employee");

test("Can instantiate Employee insatnce", () => {
  const e = new Employee ();
expect(typeof(e)).toBe("object");
});

test("Can set name via constructor", () => {
  const name = "Brendan";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set ID via constructor", () => {
  const testvalue = 100;
  const e = new Employee("Foo", testvalue);
  expect(e.id).toBe(testvalue);
});

test("Can set email via constructor", () => {
  const testvalue = "email@email.com";
  const e = new Employee("Foo", 1, testvalue);
  expect(e.email).toBe(testvalue);
});

test("Can get name via getName()", () => {
  const testvalue = "Brendan";
  const e = new Employee(testvalue);
  expect(e.getName()).toBe(testvalue);
});

test("Can get ID  via getId()", () => {
  const testvalue = 100;
  const e = new Employee("Foo", testvalue);
  expect(e.getId()).toBe(testvalue);
});

test("Can get email via getEmail()", () => {
  const testvalue = "email@email.com";
  const e = new Employee("Foo", 1, testvalue);
  expect(e.getEmail()).toBe(testvalue);
});

test("getRole() should return \"Employee\"", () => {
  const testvalue = "Employee";
  const e = new Employee("Brendan", 1, testvalue);
  expect(e.getRole()).toBe(testvalue);
});

