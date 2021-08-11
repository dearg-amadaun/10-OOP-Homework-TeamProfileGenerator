/*Employee Contstructor*/

/*EX: Unit 10 ex21-22
class NAME {
    constructor(property, property, property) {
      this.property = property;
      this.property = property;
      this.property = property;
    }
*/

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.id;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;
