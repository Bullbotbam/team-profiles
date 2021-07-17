class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.errors = [];
  }
  getName() {
    return `${this.name}`;
  }
  getId() {
    return `${this.id}`;
  }
  getEmail() {
    return `${this.email}`;
  }
  getRole() {
    return Employee;
  }

}




console.log(new Employee().getRole());

module.exports = Employee;
