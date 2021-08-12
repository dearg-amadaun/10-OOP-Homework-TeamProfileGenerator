const Intern = require('../lib/Intern');

test('Set school test', () => {
  const testSchool = 'College';
  const newInt = new Intern('Foo', 1, 'email@email.com', testSchool);
  expect(newInt.school).toBe(testSchool);
});
test('Get school test', () => {
  const testSchool = 'College';
  const newInt = new Intern('Foo', 1, 'email@email.com', testSchool);
  expect(newInt.getSchool()).toBe(testSchool);
});
test('Get role test', () => {
  const testIntern = 'Intern';
  const newInt = new Intern('Foo', 1, 'email@email.com', 'College');
  expect(newInt.getRole()).toBe(testIntern);
});
