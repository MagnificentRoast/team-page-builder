const Employee = require("../lib/Employee");

test("Generates Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Should get name from constructor", () => {
    const name = "James";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Should get id", () => {
    const testVal = 100;
    const e = new Employee("James", testVal);
    expect(e.id).toBe(testVal);
});

test("to set email", () => {
    const testVal = "test@test.com";
    const e = new Employee("James", 1, testVal);
    expect(e.email).toBe(testVal);
});

// getName
test("to get name from getName", () => {
    const testVal = "James";
    const e = new Employee(testVal);
    expect(e.name).toBe(testVal);
})
// getId
test("to get ID from getId", () => {
    const testVal = 100;
    const e = new Employee("James", testVal);
    expect(e.getId()).toBe(testVal);
})
// getEmail
test("to get email from getEmail", () => {
    const testVal = "test@test.com";
    const e = new Employee("James", 1, testVal);
    expect(e.getEmail()).toBe(testVal);
});
// getRole
test("to ensure role returns as \"Employee\"", () => {
    const testVal = "Employee";
    const e = new Employee("James", 1, "test@test.com");
    expect(e.getRole()).toBe(testVal);
});
