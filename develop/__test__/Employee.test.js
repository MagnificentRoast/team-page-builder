const Employee = require("../lib/Employee");

test("Can Instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});


