const Engineer = require('../lib/Engineer');

test('to set github account from constructor', () => {
    const testVal = 'GitHubUser';
    const e = new Engineer('Timothy', 1, 'test@test.com', testVal);
    expect(e.github).toBe(testVal);
});

test('to see if getRole() returns as \"Engineer\"', () => {
    const testVal = "Engineer";
    const e = new Engineer('Timothy', 1, 'test@test.com', "GitHubUser");
    expect(e.getRole()).toBe(testVal);
});

test("to get GitHub name via getGitHub()", () => {
    const testVal = "GitHubUser";
    const e = new Engineer('Timothy', 1, 'test@test.com', testVal);
    expect(e.getGithub()).toBe(testVal);
});