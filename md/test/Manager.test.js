const Manager = require('../lib/Manager');

test('Set office test', () => {
  const testOffice = 123;
  const newMan = new Manager('Foo', 1, 'email@email.com', testOffice);
  expect(newMan.officeNumber).toBe(testOffice);
});
test('Set office number test', () => {
  const testOffice = 123;
  const newMan = new Manager('Foo', 1, 'email@email.com', testOffice);
  expect(newMan.getOfficeNumber()).toBe(testOffice);
});
test('Get role test', () => {
  const testMan = 'Manager';
  const newMan = new Manager('Foo', 1, 'email@email.com', 123);
  expect(newMan.getRole()).toBe(testMan);
});
