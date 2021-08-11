//THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
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

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;