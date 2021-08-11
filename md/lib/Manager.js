//THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
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

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;