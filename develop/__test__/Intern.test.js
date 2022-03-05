const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern');

test("To set school via constructor", () => {
    const testVal = "UofA";
    const e = new Intern("Timothy", 1, "test@test.com", testVal);
    expect(e.school).toBe(testVal);
});

test("should override getRole() with \"Intern\"", () => {
    const testVal = "Intern";
    const e = new Intern("Timothy", 1, "test@test.com");
    expect(e.getRole()).toBe(testVal);
});

test("to get school via getSchool()", () => {
    const testVal = "UofA";
    const e = new Intern("Timothy", 1, "test@test.com", testVal);
    expect(e.getSchool()).toBe(testVal);
});