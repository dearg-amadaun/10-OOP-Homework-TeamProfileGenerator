/*Employee Tests */
//*EX: Unit 10 ex13-16


/*describe('Todo', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      // Arrange
      const text = 'Pick up milk';
      // Act
      const obj = new Todo(text);
      // Assert
      expect(obj.text).toEqual(text);
    });
    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Todo();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );
       // Assert
      expect(cb).toThrowError(err);
    });
  });
});

*/

const Employee =require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
    it('Create employee test', () => {
        const empl = new Employee();
        expect(typeof(empl)).tobe(Object);
    });
    it('Set name test', () => {
        const name ='Employee';
        const empl = new Employee(name);
        expect(empl.name).tobe(name);
    });
    it('Set id test', () => {
        const testId = 1;
        const empl = new Employee('Foo', testId);
        expect(empl.id).tobe(testId);
    });
    it('Set email test', () => {
        const testMail = 'email@email.com';
        const empl = new Employee('Foo', 1, testMail);
        expect(empl.email).tobe(testMail);
    })
 });
});