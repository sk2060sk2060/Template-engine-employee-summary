// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;

// const manager = new Manager("John", 23, "john@gmail.com")
// console.log(manager.getName());
// console.log(manager.getId());
// console.log(manager.getEmail());
// console.log(manager.getRole());
// console.log(employee.getRole());