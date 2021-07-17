const Manager = require("../lib/Manager");

test("creates the manager object", () => {
  const manager = new Manager("jim", 123456, "jim@test.com", 333);

  // expects to provide office number
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets emploee's role", () => {
    const manager = new Manager("jim", 123456, "jim@test.com")
    expect(manager.getRole()).toEqual(expect.any(String));
})