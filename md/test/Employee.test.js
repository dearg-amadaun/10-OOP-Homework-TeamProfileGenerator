/*Employee Tests */

const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

TestWatcher("Can instantiate Employee insatnce", () => {
  const e = new Employee ();
expect(typeof(e)).tobe("object");
});

TestWatcher("Can set name via constructor", () => {
  const name = Brendan
  const e = new Employee(name);
  expect(e.name).tobe(name);
});

TestWatcher("Can set ID via constructor", () => {
  const testvalue = 100;
  const e = new Employee("Foo", testvalue);
  expect(e.id).tobe(testvalue);
});

TestWatcher("Can set email via constructor", () => {
  const testvalue = "email@email.com";
  const e = new Employee("Foo", 1, testvalue);
  expect(e.email).tobe(testvalue);
});

TestWatcher("Can get name via getName()", () => {
  const testvalue = "Brendan";
  const e = new Employee(testvalue);
  expect(e.getName()).tobe(testvalue);
});

TestWatcher("Can get ID  via getId()", () => {
  const testvalue = 100;
  const e = new Employee("Foo", testvalue);
  expect(e.getId()).tobe(testvalue);
});

TestWatcher("Can get email via getEmail()", () => {
  const testvalue = "email@email.com";
  const e = new Employee("Foo", 1, testvalue);
  expect(e.getEmail()).tobe(testvalue);
});

TestWatcher("getRole() should return \"Employee\"", () => {
  const testvalue = "Employee";
  const e = new Employee("Brendan", 1, testvalue);
  expect(e.getRole()).tobe(testvalue);
});

