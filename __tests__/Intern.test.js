
const Intern = require("../lib/Intern");

test("creates the Intern object", () => {
    const intern = new Intern("jim", 123456, "jim@test.com", "JimboRules", "Big Guy School")

    expect(intern.school).toEqual(expect.any(String));
})


test('gets GitHub account',() =>{
    const intern = new Intern("jim", 123456, "jim@test.com", "JimboRules", "Big Guy School")

    expect(intern.getSchool()).toEqual(expect.any(String));

})