/*Engineer Constructor*/
//THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
/*EX:
const CLASS = require('./Employee');
class NAME extends Employee {
    constructor(property, property, property) {
      this.property = property;
      this.property = property;
      this.property = property;
    }
    const CLASS = new CLASS(property, property);
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;


