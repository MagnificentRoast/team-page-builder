const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

// office number test
test("Should be able to set office number via constructor", () => {
    const testVal = 100;
    const e = new Manager("Timothy", 1, "test@test.com", testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});
// getRole override
test("To see if getRole() is overridden with \"Manager\"", () => {
    const testVal = "Manager";
    const e = new Manager("Timothy", 1, "test@test.com", 100, testVal);
    expect(e.getRole()).toBe(testVal);
})
// getOffice() test
test("to get office number from the getOffice function", () => {
    const testVal = 100;
    const e = new Manager("Timothy", 1, "test@test.com", 100, testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});