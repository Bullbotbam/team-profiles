
const Engineer = require("../lib/Engineer");

test("creates the Engineer object", () => {
    const engineer = new Engineer("jim", 123456, "jim@test.com", "JimboRules")

    expect(engineer.github).toEqual(expect.any(String));
})


test('gets GitHub account',() =>{
    const engineer = new Engineer("jim", 123456, "jim@test.com", "JimboRules")

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));

})