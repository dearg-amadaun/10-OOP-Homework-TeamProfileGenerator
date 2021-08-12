const Engineer = require('../lib/Engineer');

test('Set github test', () => {
  const testGit = 'GitHub';
  const newEng = new Engineer("Foo", 1, "email@email.com", testGit);
  expect(newEng.github).toBe(testValue);
});
test('Get GitHub username test', () => {
    const testGitN = 'GitName';
    const newEng = new Engineer('Foo', 1, 'email@email.com', testGitN);
    expect(newEng.getGithub()).toBe(testGitNitN);
});
test('Get role test', () => {
  const testEngi = 'Engineer';
  const newEng = new Engineer('Foo', 1, 'email@email.com', 'GitHub');
  expect(newEng.getRole()).toBe(testEngi);
});